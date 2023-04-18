using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;

namespace StonksAPI.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
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
    
    [HttpGet("groups")]
    public async Task<IActionResult> GetUserGroups()
    {
        throw new NotImplementedException();
    }

    
    [HttpGet("assets")]
    public async Task<IActionResult> GetUserAssets()
    {
        throw new NotImplementedException();
    }
    
    [HttpGet("balance-history")]
    public async Task<IActionResult> GetUserBalanceHistory()
    {
        
        var id = HttpContext.User.Claims.First(c => c.Type == "id").Value;
        var email = HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Email).Value;
        return Ok();
    }

}