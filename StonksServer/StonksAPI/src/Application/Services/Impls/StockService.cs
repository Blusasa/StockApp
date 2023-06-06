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

    public async Task<double> GetLivePriceAsync(string symbol)
    {
        var day = DateTime.Today.DayOfWeek;
        var after8PmOnFriday = (DateTime.Today.DayOfWeek == DayOfWeek.Friday && DateTime.Now.Hour > 20) ? true : false;
        var isWeekend = day is DayOfWeek.Saturday or DayOfWeek.Sunday ? true : false;
        var before8AmOnMonday = (DateTime.Today.DayOfWeek == DayOfWeek.Monday && DateTime.Now.Hour < 8) ? true : false;

        if (after8PmOnFriday || isWeekend || before8AmOnMonday)
        {
            var s = _stockRepo.GetStockWithQuote(symbol);
            var stock = s.Result;

            return stock.Quote.CurrentPrice;
        }

        return await _stockRepo.GetLiveStockPriceAsync(symbol);
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