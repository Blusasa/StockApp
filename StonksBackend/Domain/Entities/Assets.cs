
using StonksBackend.Domain.Entities.Stocks;

namespace StonksBackend.Domain.Entities{

    public class Assets {
    
        public IEnumerable<Stock> StocksOwned { get; set; }
        
    }
}