using StonksBackend.Domain.Entities.Stocks;

namespace StonksBackend.Domain.Interfaces.Clients;

public interface IMarketClient
{ 
    public Task<string> GetStockCandleDataAsync(String stockSymbol);
}