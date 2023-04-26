using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Domain.Entities;

public class OwnedAsset
{
    public Stock stockOwned { get; set; }
    public double sharesOwned { get; set; }
    public double dollarValuation { get; set; }
}