using System.Collections.Concurrent;
using System.Text.Json;
using StonksAPI.Domain.Interfaces.Clients;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace StonksAPI.Infrastructure.Clients.Market;

public class SocketQueueManager: ISocketQueueManager
{
    private readonly object _lock = new object();
    private IDisposable unsubscriber;
    private readonly ISet<string> _symbolsOnSocket;
    private readonly ConcurrentQueue<string> _waitListedSymbols;
    private readonly Dictionary<string, ConcurrentStack<string>> _symbolMessages;
    private readonly Dictionary<string, AutoResetEvent> _newMessageAlerts;
    private AutoResetEvent _PullFromQueueAlert;
    private readonly IList<string> _lruSymbol;
    private const int SocketCapacity = 50;
    private readonly IMarketSocket _marketSocket;

    public SocketQueueManager(IMarketSocket socket)
    {
        _marketSocket = socket;
        _lruSymbol = new List<string>();
        _waitListedSymbols = new ConcurrentQueue<string>();
        _symbolsOnSocket = new HashSet<string>();
        _symbolMessages = new Dictionary<string, ConcurrentStack<string>>();
        _newMessageAlerts = new Dictionary<string, AutoResetEvent>();
        
        _marketSocket.StartConnection();
        Subscribe();

        Task.Run(ReadFromQueueToSocket);
    }

    public async Task<string> GetPriceAsync(string symbol)
    {
        if (_symbolsOnSocket.Contains(symbol))
        {
            UpdateLruSymbol(symbol);

            if (_symbolMessages[symbol].TryPeek(out var json))
            {
                return json;
            }

            await Task.Run(() => _newMessageAlerts[symbol].WaitOne());
            _symbolMessages[symbol].TryPeek(out var json2);
            return json2;
        }

        lock (_lock)
        {
            SubmitForListening(symbol);
        }

        _newMessageAlerts[symbol].WaitOne();

        _symbolMessages[symbol].TryPeek(out string json3);
        _newMessageAlerts[symbol].Reset();
        return json3;
    }
    
    private async Task ReadFromQueueToSocket()
    {
        while (true)
        {
            if (_waitListedSymbols.TryDequeue(out string symbol))
            {
                if (_symbolsOnSocket.Count > SocketCapacity)
                {
                    var lruSymbol = GetLruSymbol();
                    _marketSocket.UnsubscribeToSymbol(lruSymbol);
                    _symbolMessages.Remove(lruSymbol);
                    ReplaceLruSymbol(lruSymbol);
                    
                    _symbolMessages.Add(symbol, new ConcurrentStack<string>());
                    _newMessageAlerts.Add(symbol, new AutoResetEvent(false));
                    _marketSocket.SubscribeToSymbol(symbol);
                }
            }
            
            _PullFromQueueAlert.WaitOne();
        }
    }

    private void UpdateLruSymbol(string MRU)
    {
        _lruSymbol.Insert(0, MRU);
    }

    private string GetLruSymbol()
    {
        var indexes = new Dictionary<string, int>();
        for (int i = 0; i < _lruSymbol.Count; i++)
        {
            var sym = _lruSymbol[i];
            
            if (!indexes.ContainsKey(sym))
            {
                indexes.Add(sym, i);
            }
            else
            {
                indexes[sym] = i;
            }
        }

        var lruIndex = indexes.Values.Max();
        var lruSym = _lruSymbol[lruIndex];

        return lruSym;
    }

    private void ReplaceLruSymbol(string lruSymbol)
    {
        var lruIndexes = (from s in _lruSymbol where s == lruSymbol select _lruSymbol.IndexOf(s)).ToList();
        foreach (var i in lruIndexes)
        {
            _lruSymbol.RemoveAt(i);
        }
    }

    private void SubmitForListening(string symbol)
    {
        if (_symbolsOnSocket.Count < SocketCapacity)
        {
            if (_symbolsOnSocket.Contains(symbol)) return;
            
            _symbolsOnSocket.Add(symbol);
            _symbolMessages.Add(symbol, new ConcurrentStack<string>());
            _newMessageAlerts[symbol] = new AutoResetEvent(false);
            _marketSocket.SubscribeToSymbol(symbol);
        }
        else
        {
            _waitListedSymbols.Enqueue(symbol);
            _PullFromQueueAlert.Set();
        }
    }

    private void Subscribe()
    {
        unsubscriber = _marketSocket.Subscribe(this);
    }

    private void Unsubscribe()
    {
        unsubscriber.Dispose();
    }

    public void OnCompleted()
    {
        //nothing right now
    }

    public void OnError(Exception error)
    {
        //nothing right now
    }

    public virtual void OnNext(string json)
    {
        Console.WriteLine($"Message Received: {json}");

        var msg = JsonSerializer.Deserialize<JsonElement>(json);
        
        //Ignore ping messages
        if (msg.GetProperty("type").GetString() == "ping")
        {
            return;
        }

        var data = msg.GetProperty("data")[0];
        var symbol = data.GetProperty("s").GetString();

        _symbolMessages[symbol].Push(json);
        _newMessageAlerts[symbol].Set();
    }
}