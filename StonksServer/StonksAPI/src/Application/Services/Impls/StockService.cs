using StonksAPI.Application.Services.Contracts;
using StonksAPI.Domain.Entities.Stocks;
using StonksAPI.Domain.Interfaces.Repositories;

namespace StonksAPI.Application.Services.Impls;

public class StockService : IStockService
{
    private readonly IStockRepo _stockRepo;

    public StockService(IStockRepo repo)
    {
        _stockRepo = repo;
    }
    
    public async Task<Stock> GetStockCandleData(string symbol, string resolution)
    {

        return await _stockRepo.GetStockWithCandles(symbol, resolution);
    }

    public async Task<Stock> GetStockQuote(string symbol)
    {
        return await _stockRepo.GetStockWithQuote(symbol);
    }

    public Task<Stock> GetStockNews(string symbol)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Stock>> GetStocks(int pageIndex, int pageNumber)
    {
        throw new NotImplementedException();
    }

    public Task<Stock> GetStockWithFullCandles(string symbol)
    {
        throw new NotImplementedException();
    }
}