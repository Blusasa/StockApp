namespace StonksAPI.Domain.Entities.Stocks;

public class StockProfile
{
    public string Exchange { get; set; }
    public string IpoDate { get; set; }
    public string CompanyName { get; set; }
    public string Symbol { get; set; }
    public string Website { get; set; }
    public string LogoURI { get; set; }
    public string Industry { get; set; }
    public double MarketCapitalization { get; set; }
}