
using System.Text.Json;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Domain.Entities.Stocks;
using StonksBackend.Domain.Interfaces.Clients;

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
        string stockJson = await _marketClient.GetStockCandleDataAsync("AAPL");
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
            dataPoint.TimeStamp = timeElement[i].GetInt64();
            candleData.Add(dataPoint);
        }

        var stock = new Stock
        {
            CandleData = candleData,
            CompanyName = "Apple Inc",
            Symbol = "AAPL"
        };
        
        return stock;
    }
}