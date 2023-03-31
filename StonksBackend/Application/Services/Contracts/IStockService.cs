using StonksBackend.Domain.Entities.Stocks;

namespace StonksBackend.Application.Services.Contracts;

public interface IStockService
{
    public Task<Stock> GetStockCandleData(string symbol);
}