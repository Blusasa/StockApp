using StonksAPI.Domain.Entities.Stocks;
using StonksAPI.Domain.Interfaces.Clients;

namespace StonksAPI.Infrastructure.Clients.Market{

    public class FinnHubClient: IMarketClient{
        private async Task<string> GetResponse(String fullUrl){
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(fullUrl);
                var ensureSuccessStatusCode = response.EnsureSuccessStatusCode();
                return await response.Content.ReadAsStringAsync();
            }
        }
        
        public Task<string> GetStockCandleAsync(string symbol, Candle.TimeInterval interval, Candle.Resolution resolution)
        {
            //Finnhub requires a resolution query filter. Enums are always stored as ints so if the enum is bigger than Sixty(60)
            //format the string as a digit
            var resolutionStr = resolution.CompareTo(Candle.Resolution.Sixty) > 0
                ? resolution.ToString("G")
                : resolution.ToString("D");

            var now = DateTime.Now;
            var fromDate = () =>
            {
                return interval switch
                {
                    Candle.TimeInterval.Hr => DateTime.Now.AddHours(-1),
                    Candle.TimeInterval.Week => DateTime.Now.AddDays(-7),
                    Candle.TimeInterval.Month => DateTime.Now.AddMonths(-1),
                    Candle.TimeInterval.Year => DateTime.Now.AddYears(-1),
                    _ => DateTime.Now.AddDays(-1)
                };
            };

            string url = new UrlBuilder()
                .WithHost(ClientURLConstants.BaseUrl)
                .WithPath(ClientURLConstants.StockCandle)
                .WithQueryParameter("symbol", symbol)
                .WithQueryParameter("resolution", resolutionStr)
                .WithQueryParameter("from", DateTimeUtils.GetUnixTimeFromDate(fromDate()))
                .WithQueryParameter("to", DateTimeUtils.GetUnixTimeFromDate(now))
                .WithQueryParameter("token", ClientURLConstants.TokenParam)
                .BuildUrl();
            
            
            return GetResponse(url);
        }
        
        public Task<string> GetStocksFromUSExchangeAsync()
        {
            throw new NotImplementedException();
        }

        public Task<string> GetStockQuoteAsync(string symbol)
        {
            String url = new UrlBuilder()
                .WithHost(ClientURLConstants.BaseUrl)
                .WithPath(ClientURLConstants.StockQuote)
                .WithQueryParameter("symbol", symbol)
                .WithQueryParameter("token", ClientURLConstants.TokenParam)
                .BuildUrl();

            return GetResponse(url);
        }
    }
}