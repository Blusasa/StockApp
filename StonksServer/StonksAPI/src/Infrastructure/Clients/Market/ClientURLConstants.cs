namespace StonksAPI.Infrastructure.Clients.Market;

public class ClientURLConstants
{
            
    internal static readonly string BaseUrl = "https://finnhub.io/api/v1";
    internal static readonly string TokenParam = "cfjc9epr01que34nu720cfjc9epr01que34nu72g";
    internal static readonly string StockQuote = "/quote";
    internal static readonly string StockCandle = "/stock/candle";
    internal static readonly string SymbolsOnExchange = "/stock/symbol?exchange=US&mic=XNYS";
    internal static readonly string SocketURI = "wss://ws.finnhub.io";
}