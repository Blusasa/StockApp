using System.Collections.ObjectModel;
using StonksBackend.Domain.Entities.Stocks;

namespace StonksBackend.Domain.Interfaces.Clients;

public interface IMarketClient
{

    public Task<string> GetStocksFromUSExchangeAsync();
    
    public Task<string> GetStockQuoteAsync(string symbol);

    public Task<Collection<string>> GetStockCandlesFullSet(string symbol);
    
    public Task<string> GetStockCandles1HAsync(string symbol);

    public Task<string> GetStockCandles1DAsync(string symbol);

    public Task<string> GetStockCandles1WAsync(string symbol);
    
    public Task<string> GetStockCandles1MAsync(string symbol);

    public Task<string> GetStockCandles1YAsync(string symbol);
}