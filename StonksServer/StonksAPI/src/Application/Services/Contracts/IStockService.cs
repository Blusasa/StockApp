using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Application.Services.Contracts;

public interface IStockService
{

    public Task<double> GetLivePriceAsync(string symbol);
    
    public Task<Stock> GetStockCandleData(string symbol, string resolution);

    public Task<Stock> GetStockQuote(string symbol);

    public Task<Stock> GetStockNews(string symbol);

    public Task<IEnumerable<Stock>> GetStocks(int pageIndex, int pageNumber);
    
}