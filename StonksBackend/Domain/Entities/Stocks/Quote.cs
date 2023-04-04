namespace StonksBackend.Domain.Entities.Stocks;

public class Quote
{
    public double CurrentPrice { get; set; }
    public double PriceChange { get; set; }
    public double PercentChange { get; set; }
    public double HighPrice { get; set; }
    public double LowPrice { get; set; }
    public double PreviousClose { get; set; }
    public DateTime timeStamp { get; set; }
}