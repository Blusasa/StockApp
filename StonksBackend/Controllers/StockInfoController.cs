using StonksBackend.Infrastructure.Clients;

using Microsoft.AspNetCore.Mvc;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Domain.Entities;
using StonksBackend.Domain.Entities.Stocks;
using StonksBackend.Domain.Interfaces.Clients;

namespace StonksBackend.Controllers{
    
    [ApiController]
    [Route("/stock")]
    public class StockInfoController : ControllerBase
    {

        private readonly IStockService _stockService;

        public StockInfoController(IStockService service)
        {
            _stockService = service;
        }

        [HttpGet]
        [Route("/candleData")]
        public async Task<ActionResult<Stock>> GetStockCandleAsync()
        {

            return await _stockService.GetStockCandleData("AAPL");

        }
    }
}