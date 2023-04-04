namespace StonksBackend.Domain.Entities.Stocks;

public class Stock
{
    public Quote Quote { get; set; }
    // public Dictionary<string, CandleData> CandleDatas { get;  }
    
    public List<CandleData> CandleData { get; set; }
    public Stock()
    {
        //no args for automapping
    }
}