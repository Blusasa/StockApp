namespace StonksBackend.Infrastructure{

    public class FinnHubClient{

        private readonly HttpClient _httpClient;
        private const String _baseURL = "https://finnhub.io/api/v1";
        private const String _tokenParam = "&token=cfjc9epr01que34nu720cfjc9epr01que34nu72g";
        private const String _stockQuote = "/stock/candle?symbol=AAPL";

        public FinnHubClient(){
            _httpClient = new HttpClient();
        }

        public async Task<String> getStockInformation(String stock){
            String fullPath = $"{_baseURL}{_stockQuote}&resolution=60&from={getUnixTime30DaysAgo()}&to={getUnixTimeNow()}{_tokenParam}";

            HttpResponseMessage response = await _httpClient.GetAsync(fullPath);

            if(!response.IsSuccessStatusCode){
                throw new ArgumentException("The stock: " + stock + ", could not be found");
            }

            return await response.Content.ReadAsStringAsync();  
        }

        private int getUnixTimeNow(){
            return (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }

        private int getUnixTime30DaysAgo(){
            return (int)DateTime.UtcNow.AddDays(-30).Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }


    }
}