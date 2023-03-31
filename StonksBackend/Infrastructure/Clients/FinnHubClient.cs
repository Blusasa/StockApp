using StonksBackend.Domain.Interfaces.Clients;

namespace StonksBackend.Infrastructure.Clients{

    public class FinnHubClient: IMarketClient{

        private readonly HttpClient _httpClient;
        private const string BaseUrl = "https://finnhub.io/api/v1";
        private const string TokenParam = "&token=cfjc9epr01que34nu720cfjc9epr01que34nu72g";
        private const string StockQuote = "/stock/candle?symbol=AAPL";

        public FinnHubClient(){
            _httpClient = new HttpClient();
        }

        public async Task<string> GetStockCandleDataAsync(String stock){
            var fullPath = $"{BaseUrl}{StockQuote}&resolution=60&from={getUnixTime30DaysAgo()}&to={getUnixTimeNow()}{TokenParam}";

            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(fullPath);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadAsStringAsync();
            }
        }

        private int getUnixTimeNow(){
            return (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }

        private int getUnixTime30DaysAgo(){
            return (int)DateTime.UtcNow.AddDays(-30).Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }


    }
}