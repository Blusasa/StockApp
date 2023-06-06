namespace StonksAPI.Application.DTOs;

public class TradeRequestDTO
{
    public string Symbol { get; set; }
    public bool BuyFlag { get; set; }
    public double RequestedSharesAmount { get; set; }
    public double RequestedMonetaryAmount { get; set; }
}