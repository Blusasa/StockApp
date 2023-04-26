using System.Net.WebSockets;
using Newtonsoft.Json;
using StonksAPI.Domain.Interfaces.Clients;
using Websocket.Client;

namespace StonksAPI.Infrastructure.Clients.Market;

public class MarketSocket : IMarketSocket
{
    private string _uri;
    private WebsocketClient _socket;
    private IList<IObserver<string>> _activeObservers;

    public MarketSocket()
    {
        _uri = new UrlBuilder()
            .WithHost(ClientURLConstants.SocketURI)
            .WithQueryParameter("token", ClientURLConstants.TokenParam)
            .BuildUrl();

        _activeObservers = new List<IObserver<string>>();
    }

    public void StartConnection()
    {
        var url = new Uri(_uri);

        _socket = new WebsocketClient(url);
        _socket.MessageReceived.Subscribe(msg =>
        {
            foreach (var observer in _activeObservers)
            {
                observer.OnNext(msg.ToString());
            }
        });
        
        _socket.Start();
    }

    public void SubscribeToSymbol(string symbol)
    {
        var sub = new SocketSubscription { type = "subscribe", symbol = symbol };
        var json = JsonConvert.SerializeObject(sub);

        _socket.Send(json);
    }

    public void UnsubscribeToSymbol(string symbol)
    {
        var sub = new SocketSubscription { type = "unsubscribe", symbol = symbol };
        var json = JsonConvert.SerializeObject(sub);

        _socket.Send(json);
    }

    public async void CloseConnection()
    {
        await _socket.Stop(WebSocketCloseStatus.NormalClosure, "Socket closed");
    }

    public IDisposable Subscribe(IObserver<string> observer)
    {
        if (!_activeObservers.Contains(observer))
        {
            _activeObservers.Add(observer);
        }

        return new Unsubscriber(_activeObservers, observer);
    }

    private class Unsubscriber : IDisposable
    {
        private IList<IObserver<string>> _observers;
        private IObserver<string> _observer;

        public Unsubscriber(IList<IObserver<string>> observers, IObserver<string> observer)
        {
            _observers = observers;
            _observer = observer;
        }
        
        public void Dispose()
        {
            if (!(_observer == null))
            {
                _observers.Remove(_observer); 
            }
        }
    }
}