namespace StonksBackend.Domain.Entities.Stocks;

public class CandleData
{
    public double ClosePrice { get; set; }
    public double HighPrice { get; set; }
    public double OpenPrice { get; set; }
    public double LowPrice { get; set; }
    public double VolumeTraded { get; set; }
    public Int64 TimeStamp { get; set; }
}