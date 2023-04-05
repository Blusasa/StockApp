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
        
        public Task<string> GetStockCandleAsync(string symbol, CandleResolution resolution, DateTime from, DateTime to)
        {
            string resolutionStr = resolution.CompareTo(CandleResolution.Sixty) > 0
                ? resolution.ToString("G")
                : resolution.ToString("D");
            
            string url = new UrlBuilder()
                .WithHost(ClientURLConstants.BaseUrl)
                .WithPath(ClientURLConstants.StockCandle)
                .WithQueryParameter("symbol", symbol)
                .WithQueryParameter("resolution", resolutionStr)
                .WithQueryParameter("from", DateTimeUtils.GetUnixTimeFromDate(from))
                .WithQueryParameter("to", DateTimeUtils.GetUnixTimeFromDate(to))
                .WithQueryParameter("token", ClientURLConstants.TokenParam)
                .BuildUrl();
            
            
            return GetResponse(url);
        }
        
        public Task<string> GetStocksFromUSExchangeAsync()
        {
            // string fullUrl = $"{BaseUrl}{SymbolsOnExchange}{TokenParam}";
            //
            // return GetResponse(fullURL);
            throw new NotImplementedException();
        }

        public Task<string> GetStockQuoteAsync(string symbol)
        {
            // string fullURL = $"{BaseUrl}{StockQuote}{symbol}{TokenParam}";
            //
            // return GetResponse(fullURL);

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