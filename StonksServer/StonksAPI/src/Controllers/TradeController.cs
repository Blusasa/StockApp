using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Infrastructure.Clients.Market;

namespace StonksAPI.Controllers;

public class TradeController : BaseApiController
{
    private IStockService _stockService;
    private IUserService _userService;
    
    public TradeController(IStockService service, IUserService userService)
    {
        _stockService = service;
        _userService = userService;
    }


    [HttpGet]
    [Route("{symbol}/price/live")]
    [AllowAnonymous]
    public async Task<IActionResult> GetLivePrice(string symbol)
    {
        symbol = symbol.ToUpper();
        return Ok( await _stockService.GetLivePriceAsync(symbol));
    }


    [HttpPost]
    [AllowAnonymous]
    [Route("submit")]
    public async Task<IActionResult> SubmitTradeRequest([FromBody] TradeRequestDTO requestedTrade)
    {
        var id = HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Sub).Value;
        await _userService.SubmitOrder(requestedTrade, id);
        return Ok();
    }

    [HttpDelete]
    [Route("cancel/{orderId}")]
    public async Task<IActionResult> CancelTrade(string orderId)
    {
        return Ok();
    }








}