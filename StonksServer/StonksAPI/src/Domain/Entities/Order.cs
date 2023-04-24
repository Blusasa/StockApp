namespace StonksAPI.Domain.Entities{
    public class Order {
        public DateTime TimeStamp { get; set; }
        public string Symbol { get; set; }
        
        public TradeType TradeType { get; set; }

        public double? StockRequestedByCurrency { get; set; }
        
        public double? StockRequestedByShare { get; set; }
        public double CurrencyTraded { get; set; }
        public double SharesTraded { get; set; }
        public OrderStatus OrderStatus { get; set; }
        
        
        public void FinalizeTradedShares(double price)
        {
            
        }
    }

    public enum OrderStatus
    {
        //in the System and waiting to be submitted to the queue for procecssing
        Submitted,
        
        //actively in the queue to be processed
        Processing,
        
        //Trade completed and final details settled
        Completed,
    }

    public enum TradeType
    {
        Buy,
        Sell
    }
}