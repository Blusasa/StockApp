using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;

namespace StonksAPI.Controllers;

[ApiController]
[Route("api/user")]
[Authorize]
public class UserController : ControllerBase
{
    private IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [Route("/register")]
    [AllowAnonymous]
    public async Task<IActionResult> CreateNewUser([FromBody] RegistrationDTO newUser)
    {
        var result = await _userService.CreateUser(newUser);
        if (result.Succeeded)
        {
            return Ok();
        }

        var errors = result.Errors.Select(e => e.Description).ToList();
        return BadRequest(errors);
    }

    [HttpPost("/login")]
    [AllowAnonymous]
    public async Task<IActionResult> LogIn([FromBody] LoginDTO login)
    { 
        string token = await _userService.Login(login);
        if (token == null)
        {
            return BadRequest("Invalid credentials");
        }

        return Ok(token);

    }

    private string GenerateJwt()
    {
        return "";
    }

    [HttpPut("/update")]
    public async Task<IActionResult> UpdateUser([FromBody] UserDTO user)
    {
        throw new NotImplementedException();
    }
    
    [HttpGet("/groups")]
    public async Task<IActionResult> GetUserGroups()
    {
        throw new NotImplementedException();
    }

    
    [HttpGet("/assets")]
    public async Task<IActionResult> GetUserAssets()
    {
        throw new NotImplementedException();
    }

}