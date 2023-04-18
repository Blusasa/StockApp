using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Domain.Entities.Stocks;

namespace StonksAPI.Controllers{
    
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
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
        [Route("{symbol}/candles")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> GetStockCandleAsync(string symbol, [FromQuery] string resolution)
        {
            resolution = resolution.ToUpper();
            var supportedResolutions = new[] { "H, D, W, M, Y" };
            var reqResolutionIsSupported = supportedResolutions.Any(r => r == resolution);
            
            
            if (string.IsNullOrEmpty(resolution))
            {
                return BadRequest("Resolution query required");
            } else if (!reqResolutionIsSupported)
            {
                return BadRequest("Resolution type not supported");
            }

            Stock stock = await _stockService.GetStockCandleData(symbol, resolution);
            return Ok(stock);
        }
        
        [HttpGet]
        [Route("{symbol}/quote")]
        public async Task<IActionResult> GetStockQuote(string symbol)
        {
            Stock stock = await _stockService.GetStockQuote(symbol);
            return Ok(stock);
        }

        [HttpGet]
        [Route("{symbol}/news")]
        public async Task<IActionResult> GetStockNews(string symbol)
        {
            var stock = await _stockService.GetStockNews(symbol);
            return Ok(stock);
        }
    }
}