using System.Collections.ObjectModel;
using StonksBackend.Domain.Interfaces.Clients;

namespace StonksBackend.Infrastructure.Clients{

    public class FinnHubClient: IMarketClient{
        
        private const string BaseUrl = "https://finnhub.io/api/v1";
        private const string TokenParam = "&token=cfjc9epr01que34nu720cfjc9epr01que34nu72g";
        private const string StockQuote = "/quote?symbol=";
        private const string StockCandle = "/stock/candle?symbol=";
        private const string SymbolsOnExchange = "/stock/symbol?exchange=US&mic=XNYS";

        private async Task<string> GetResponse(String fullUrl){
            // var fullPath = $"{BaseUrl}{StockCandle}AAPL&resolution=D&from={getUnixTimeDaysFromNow(-30)}&to={getUnixTimeNow()}{TokenParam}";

            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(fullUrl);
                var ensureSuccessStatusCode = response.EnsureSuccessStatusCode();
                return await response.Content.ReadAsStringAsync();
            }
        }

        private int getUnixTimeNow(){
            return (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }

        private int getUnixTimeDaysFromNow(int days){
            return (int)DateTime.UtcNow.AddDays(days).Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }


        public Task<string> GetStocksFromUSExchangeAsync()
        {
            string fullURL = $"{BaseUrl}{SymbolsOnExchange}{TokenParam}";

            return GetResponse(fullURL);
        }

        public Task<string> GetStockQuoteAsync(string symbol)
        {
            string fullURL = $"{BaseUrl}{StockQuote}{symbol}{TokenParam}";

            return GetResponse(fullURL);
        }

        public async Task<Collection<string>> GetStockCandlesFullSet(string symbol)
        {

            var tasks = new List<Task<string>>
            {
                GetStockCandles1DAsync(symbol),
                GetStockCandles1HAsync(symbol),
                GetStockCandles1WAsync(symbol),
                GetStockCandles1MAsync(symbol),
                GetStockCandles1YAsync(symbol), 
            };

            await Task.WhenAll(tasks);

            return new Collection<string>(tasks.Select(t => t.Result).ToList());
        }

        public Task<string> GetStockCandles1HAsync(string symbol)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetStockCandles1DAsync(string symbol)
        {
            String fullURL =
                $"{BaseUrl}{StockCandle}{symbol}&resolution=5&from={getUnixTimeDaysFromNow(-1)}&to={getUnixTimeNow()}{TokenParam}";

            return GetResponse(fullURL);
        }

        public Task<string> GetStockCandles1WAsync(string symbol)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetStockCandles1MAsync(string symbol)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetStockCandles1YAsync(string symbol)
        {
            throw new NotImplementedException();
        }
    }
}