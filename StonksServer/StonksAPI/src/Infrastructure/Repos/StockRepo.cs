using System.Collections.Concurrent;
using System.Text.Json;
using StonksAPI.Domain.Entities.Stocks;
using StonksAPI.Domain.Interfaces.Clients;
using StonksAPI.Domain.Interfaces.Repositories;
using StonksAPI.Infrastructure.Clients.Market;

namespace StonksAPI.Infrastructure.Repos;

public class StockRepo : IStockRepo
{
    private readonly IMarketClient _marketClient;
    private readonly IDictionary<Candle.TimeInterval, Candle.Resolution> _resolutions;
    private readonly ISocketQueueManager _socketQueueManager;

    public StockRepo(IMarketClient client, ISocketQueueManager socketManager)
    {
        _marketClient = client;
        _resolutions = new Dictionary<Candle.TimeInterval, Candle.Resolution>();
        
        _resolutions.Add(Candle.TimeInterval.Hr, Candle.Resolution.One);
        _resolutions.Add(Candle.TimeInterval.Day, Candle.Resolution.Five);
        _resolutions.Add(Candle.TimeInterval.Week, Candle.Resolution.Thirty);
        _resolutions.Add(Candle.TimeInterval.Month, Candle.Resolution.Sixty);
        _resolutions.Add(Candle.TimeInterval.Year, Candle.Resolution.D);

        _socketQueueManager = socketManager;
    }


    public async Task<double> GetLiveStockPriceAsync(string symbol)
    {
        var json = await _socketQueueManager.GetPriceAsync(symbol);
        var element = JsonSerializer.Deserialize<JsonElement>(json);

        var data = element.GetProperty("data")[0];
        var price = data.GetProperty("p").GetDouble();

        return price;
    }

    public async Task<Stock> GetStockWithCandles(string symbol, string resolution)
    {
        symbol = symbol.ToUpper();

        var getInterval = () =>
        {
            return resolution switch
            {
                "H" => Candle.TimeInterval.Hr,
                "W" => Candle.TimeInterval.Week,
                "M" => Candle.TimeInterval.Month,
                "Y" => Candle.TimeInterval.Year,
                _ => Candle.TimeInterval.Day
            };
        };

        var interval = getInterval();
        
        var json =
            await _marketClient.GetStockCandleAsync(symbol, interval, _resolutions[interval]);

        var candleData = ParseCandles(json);

        return new StockBuilder().Add1DCandle(candleData).Build();
    }

    public async Task<Stock> GetStockWithQuote(string symbol)
    {
        symbol = symbol.ToUpper();
        
        var json = await _marketClient.GetStockQuoteAsync(symbol);
        var quote = ParseQuote(JsonSerializer.Deserialize<JsonElement>(json));


        Stock stock = new StockBuilder().AddQuote(quote).Build();
        return stock;
    }

    private IEnumerable<Candle> ParseCandles(string json)
    {
        JsonElement jsonObj = JsonSerializer.Deserialize<JsonElement>(json);

        JsonElement openPrice = jsonObj.GetProperty("o");
        JsonElement closePrice = jsonObj.GetProperty("c");
        JsonElement lowPrice = jsonObj.GetProperty("l");
        JsonElement highPrice = jsonObj.GetProperty("h");
        JsonElement timeStamp = jsonObj.GetProperty("t");
        JsonElement volume = jsonObj.GetProperty("v");

        var candleData = new List<Candle>();
        for (int i = 0; i < openPrice.GetArrayLength(); i++)
        {
            var data = new Candle();
            data.OpenPrice = openPrice[i].GetDouble();
            data.ClosePrice = closePrice[i].GetDouble();
            data.HighPrice = highPrice[i].GetDouble();
            data.LowPrice = lowPrice[i].GetDouble();
            data.VolumeTraded = volume[i].GetInt32();
            data.TimeStamp = DateTimeUtils.UnixToDateTime(timeStamp[i].GetInt64());
            candleData.Add(data);
        }

        return candleData;
    }

    private Quote ParseQuoteFromCandles(JsonElement json)
    {
        JsonElement closePrice = json.GetProperty("c");
        JsonElement highPrice = json.GetProperty("h");
        JsonElement lowPrice = json.GetProperty("l");
        JsonElement timeStamp = json.GetProperty("t");

        var previousClose = closePrice[0].GetDouble();
        var currentPrice = closePrice[1].GetDouble();
        var priceChange = currentPrice - previousClose;
        var percentChange = (priceChange / previousClose) * 100.00;
        var finalHigh = highPrice[0].GetDouble() > highPrice[1].GetDouble()
            ? highPrice[0].GetDouble()
            : highPrice[1].GetDouble();
        var finalLow = lowPrice[0].GetDouble() > lowPrice[1].GetDouble()
            ? lowPrice[0].GetDouble()
            : lowPrice[1].GetDouble();


        var quote = new Quote
        {
            CurrentPrice = currentPrice,
            PreviousClose = previousClose,
            PriceChange = priceChange,
            PercentChange = percentChange,
            HighPrice = finalHigh,
            LowPrice = finalLow,
            TimeStamp = DateTimeUtils.UnixToDateTime(timeStamp[1].GetInt64())
        };

        return quote;
    }

    private Quote ParseQuote(JsonElement json)
    {
        JsonElement currentPrice = json.GetProperty("c");
        JsonElement priceChange = json.GetProperty("d");
        JsonElement percentChange = json.GetProperty("dp");
        JsonElement highPrice = json.GetProperty("h");
        JsonElement lowPrice = json.GetProperty("o");
        JsonElement previousClose = json.GetProperty("pc");
        JsonElement timeStamp = json.GetProperty("t");

        Quote quote = new Quote
        {
            CurrentPrice = currentPrice.GetDouble(),
            PriceChange = priceChange.GetDouble(),
            HighPrice = highPrice.GetDouble(),
            PercentChange = percentChange.GetDouble(),
            LowPrice = lowPrice.GetDouble(),
            PreviousClose = previousClose.GetDouble(),
            TimeStamp = DateTimeUtils.UnixToDateTime(timeStamp.GetInt64()),
        };

        return quote;
    }

    public async Task<Stock> GetFullStock(string symbol)
    {
        throw new NotImplementedException();
    }

    public Task<Stock> GetStockNews(string symbol)
    {
        throw new NotImplementedException();
    }
    
}