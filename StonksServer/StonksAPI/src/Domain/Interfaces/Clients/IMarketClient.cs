using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Domain.Interfaces.Clients;

public interface IMarketClient
{

    public Task<string> GetStocksFromUSExchangeAsync();
    
    public Task<string> GetStockQuoteAsync(string symbol);

    public Task<string> GetStockCandleAsync(string symbol, Candle.TimeInterval interval, Candle.Resolution resolution);
    
}