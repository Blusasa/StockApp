using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Domain.Interfaces.Repositories;

public interface IStockRepo
{
    public Task<Stock> GetStockWithCandles(string symbol, string resolution);

    public Task<Stock> GetStockWithQuote(string symbol);

    public Task<Stock> GetFullStock(string symbol);

    public Task<Stock> GetStockNews(string symbol);
}