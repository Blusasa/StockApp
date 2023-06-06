namespace StonksAPI.Domain.Entities.Stocks;

public class Candle
{
    public double ClosePrice { get; set; }
    public double HighPrice { get; set; }
    public double OpenPrice { get; set; }
    public double LowPrice { get; set; }
    public double VolumeTraded { get; set; }
    public DateTime TimeStamp { get; set; }

    public enum TimeInterval
    {
        Hr,
        Day,
        Week,
        Month,
        Year
    }

    public enum Resolution
    {
        One = 1,
        Five = 5,
        Fifteen = 15,
        Thirty = 30,
        Sixty = 60,

        /*  All enums below this comment are specifically >60 so that way when writing toString()
            we can run a conditional that writes with the format type 'd' or g'                     */
        D = 61,
        W = 62,
        M = 63,
        Y = 64
    }
    
}