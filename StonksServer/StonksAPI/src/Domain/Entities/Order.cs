
using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Domain.Entities{
    public class Order {
        
        public DateTime TimeStamp { get; set; }
        public Stock StockInOrder { get; set; }
        public bool BuyOrSell { get; set; }
        public double CurrencyTraded { get; set; }
        public double SharesTraded { get; set; }
        
    }
}