namespace StonksAPI.Domain.Entities.Stocks;

public enum CandleResolution
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