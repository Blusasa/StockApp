
using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Domain.Entities{

    public class Assets {
    
        public IEnumerable<Stock> StocksOwned { get; set; }
        
    }
}