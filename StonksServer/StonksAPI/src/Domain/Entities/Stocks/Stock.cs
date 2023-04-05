namespace StonksAPI.Domain.Entities.Stocks;

public class Stock
{
    public string? CompanyName { get; set; }
    public string? Symbol { get; set; }
    public Quote? Quote { get; set; }
    public IDictionary<string, CandleData> CandleDatas { get; set; }
    public ICollection<News> News { get; set; }
}