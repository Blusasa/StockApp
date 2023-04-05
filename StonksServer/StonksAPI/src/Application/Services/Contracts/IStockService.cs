using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Application.Services.Contracts;

public interface IStockService
{
    public Task<Stock> GetStockCandleData(string symbol);

    public Task<Stock> GetStockQuote(string symbol);

    public Task<Stock> GetStockNews(string symbol);

    public Task<IEnumerable<Stock>> GetStocks(int pageIndex, int pageNumber);

    public Task<Stock> GetStockWithFullCandles(string symbol);
}