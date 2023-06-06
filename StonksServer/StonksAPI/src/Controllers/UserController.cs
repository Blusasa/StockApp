using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;

namespace StonksAPI.Controllers;
public class UserController : ControllerBase
{
    private IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateUser([FromBody] UserDTO user)
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    [Route("orders")]
    [Route("orders/{id}")]
    [Route("orders/{symbol}")]
    public async Task<IActionResult> GetOrders(string id, string symbol)
    {
        return Ok();
    }


    [HttpGet("groups")]
    public async Task<IActionResult> GetUserGroups()
    {
        throw new NotImplementedException();
    }

    
    [HttpGet]
    [Route("assets")]
    [Route("assets/{symbol}")]
    public async Task<IActionResult> GetUserAssets(string symbol)
    {
        throw new NotImplementedException();
    }


    [HttpGet]
    [Route("balance/current")]
    public async Task<IActionResult> GetUserBalance()
    {
        return Ok();
    }


    [HttpGet("balance/history")]
    public async Task<IActionResult> GetUserBalanceHistory([FromQuery] string resolution)
    {
        var id = HttpContext.User.Claims.First(c => c.Type == "id").Value;
        var email = HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Email).Value;
        return Ok();
    }

    [HttpGet]
    [Route("notifications")]
    public async Task<IActionResult> GetNotifications()
    {
        return Ok();
    }

    [HttpDelete]
    [Route("notifications/remove/{notificationId}")]
    public async Task<IActionResult> DeleteNotification(string notifId)
    {
        return Ok();
    }

}