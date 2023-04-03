
using System.Text.Json;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Domain.Entities.Stocks;
using StonksBackend.Domain.Interfaces.Clients;
using StonksBackend.Infrastructure.Clients;

namespace StonksBackend.Application.Services.Impls;

public class StockService : IStockService
{
    private readonly IMarketClient _marketClient;

    public StockService(IMarketClient client)
    {
        _marketClient = client;
    }

    public async Task<Stock> GetStockCandleData(string symbol)
    {
        string stockJson = await _marketClient.GetStockCandles1DAsync(symbol);
        var jsonObject = JsonSerializer.Deserialize<JsonElement>(stockJson);

        var candleData = new List<CandleData>();
        JsonElement closeElement = jsonObject.GetProperty("c");
        JsonElement openElement = jsonObject.GetProperty("o");
        JsonElement highElement = jsonObject.GetProperty("h");
        JsonElement lowElement = jsonObject.GetProperty("l");
        JsonElement volumeElement = jsonObject.GetProperty("v");
        JsonElement timeElement = jsonObject.GetProperty("t");

        for (var i = 0; i < closeElement.GetArrayLength(); i++)
        {
            var dataPoint = new CandleData();
            dataPoint.ClosePrice = closeElement[i].GetDouble();
            dataPoint.HighPrice = highElement[i].GetDouble();
            dataPoint.OpenPrice = openElement[i].GetDouble();
            dataPoint.LowPrice = lowElement[i].GetDouble();
            dataPoint.VolumeTraded = volumeElement[i].GetInt32();
            dataPoint.TimeStamp = UnixToDateTime(timeElement[i].GetInt64());
            candleData.Add(dataPoint);
        }

        var stock = new Stock
        {
            CandleData = candleData,
            Quote = new Quote()
        };
        
        return stock;
    }

    public async Task<Stock> GetStockQuote(string symbol)
    {
        symbol = symbol.ToUpper();

        string stockJSON = await _marketClient.GetStockQuoteAsync(symbol);
        var jsonObject = JsonSerializer.Deserialize<JsonElement>(stockJSON);

        JsonElement currentPrice = jsonObject.GetProperty("c");
        JsonElement priceChange = jsonObject.GetProperty("d");
        JsonElement percentChange = jsonObject.GetProperty("dp");
        JsonElement highPrice = jsonObject.GetProperty("h");
        JsonElement lowPrice = jsonObject.GetProperty("o");
        JsonElement previousClose = jsonObject.GetProperty("pc");

        Quote quote = new Quote
        {
            CurrentPrice = currentPrice.GetDouble(),
            PriceChange = priceChange.GetDouble(),
            HighPrice = highPrice.GetDouble(),
            PercentChange = percentChange.GetDouble(),
            LowPrice = lowPrice.GetDouble(),
            PreviousClose = previousClose.GetDouble()
        };

        Stock stock = new Stock();
        stock.Quote = quote;

        return stock;
    }

    private DateTime UnixToDateTime(long timeStamp)
    {
        return DateTimeOffset.FromUnixTimeSeconds(timeStamp).LocalDateTime;
    }
}