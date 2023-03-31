namespace StonksBackend.Domain.Entities.Stocks;

public class Stock
{
    public string CompanyName { get; set;  }
    public string Symbol { get; set; }
    public List<CandleData> CandleData { get; set; }

    public Stock()
    {
        //no args for automapping
    }
}