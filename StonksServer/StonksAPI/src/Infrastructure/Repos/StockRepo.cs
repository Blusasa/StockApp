using System.Text.Json;
using StonksAPI.Domain.Entities.Stocks;
using StonksAPI.Domain.Interfaces.Clients;
using StonksAPI.Domain.Interfaces.Repositories;

namespace StonksAPI.Infrastructure.Repos;

public class StockRepo : IStockRepo
{
    private IMarketClient _marketClient;

    public StockRepo(IMarketClient client)
    {
        _marketClient = client;
    }

    public async Task<Stock> GetStockWithCandles(string symbol)
    {
        throw new NotImplementedException();
    }

    public async Task<Stock> GetStockWithQuote(string symbol)
    {
        symbol = symbol.ToUpper();

        string json;
        Quote quote;

        /*
         * First scenario is that it is either Mon after 8 pm or Tue before 4 am. Candles pulled will be from close Mon and previous close Fri.
         */
        bool requiresLastFridayCandles =
            (DateTime.Today.DayOfWeek == DayOfWeek.Monday && DateTime.Now.Hour > 20) ||
            (DateTime.Today.DayOfWeek == DayOfWeek.Tuesday && DateTime.Now.Hour < 4);

        /*
         * Second scenario is if the client requests a quote over the weekend. Candles pulled will be from close Thur to close Fri. 
         */
        bool isWeekend = (DateTime.Today.DayOfWeek == DayOfWeek.Saturday ||
                          DateTime.Today.DayOfWeek == DayOfWeek.Sunday);

        if (requiresLastFridayCandles)
        {
            json = await GetQuoteFromMonday(symbol); 
            quote = ParseQuoteFromCandles(JsonSerializer.Deserialize<JsonElement>(json));
        } else if (isWeekend)
        {
            json = await GetQuoteFromWeekend(symbol);
            quote = ParseQuoteFromCandles(JsonSerializer.Deserialize<JsonElement>(json));
        } else
        {
            json = await _marketClient.GetStockQuoteAsync(symbol);
            quote = ParseQuote(JsonSerializer.Deserialize<JsonElement>(json));
        }

        Stock stock = new StockBuilder().AddQuote(quote).Build();
        return stock;
    }

    private async Task<string> GetQuoteFromWeekend(string symbol)
    {
        return await _marketClient.GetStockCandleAsync(symbol, CandleResolution.D,
            DateTimeUtils.GetPreviousThurdayCloseFromNow(), DateTimeUtils.GetPreviousFridayCloseFromNow());
    }

    private async Task<string> GetQuoteFromMonday(string symbol)
    {
        return await _marketClient.GetStockCandleAsync(symbol, CandleResolution.D,
            DateTimeUtils.GetPreviousFridayCloseFromNow(), DateTimeUtils.GetTodayAt8PM());
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
}