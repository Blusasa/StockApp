using System.Net;
using StonksBackend.Infrastructure.Clients;

using Microsoft.AspNetCore.Mvc;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Domain.Entities.Stocks;
using StonksBackend.Infrastructure.Clients;

namespace StonksBackend.Controllers{
    
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class StocksController : ControllerBase
    {
        private readonly IStockService _stockService;

        public StocksController(IStockService service)
        {
            _stockService = service;
        }
        
        /// <summary>
        /// Returns 1h, 1d, 1w, 1m, and 1y candle data for provided stock
        /// </summary>
        /// <returns>Stock</returns>
        [HttpGet]
        [Route("/candles/")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<Stock>> GetStockCandleAsync([FromQuery] string symbol)
        {
            return await _stockService.GetStockCandleData(symbol);
        }
    }
}