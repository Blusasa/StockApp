using StonksBackend.Infrastructure;

using Microsoft.AspNetCore.Mvc;
using StonksBackend.Domain.Entities;

namespace StonksBackend.Controllers{
    
    [ApiController]
    [Route("/stock")]
    public class StockInfoController : ControllerBase{

        private readonly FinnHubClient _finnhubClient;

        public StockInfoController(){
            _finnhubClient = new FinnHubClient();
        }

        [HttpGet]
        public async Task<ActionResult<string>> getStockAsync(){

            return await _finnhubClient.getStockInformation("AAPL");

        }
    }
}