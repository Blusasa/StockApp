using System.Net;
using Microsoft.AspNetCore.Mvc;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Domain.Entities;
using StonksBackend.Services.DTOs;

[ApiController]
[Route("/user")]
public class UserController : ControllerBase
{
    private IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [Route("/new-user")]
    public async Task<IActionResult> CreateNewUser([FromBody] User user){
        UserDTO insertedUser = await _userService.CreateUser(user);
        return CreatedAtAction(null, insertedUser);
    }

    [HttpPost("/login")]
    public async Task<IActionResult> LogIn([FromBody] string username, string password)
    {
        throw new NotImplementedException();
    }
    
    [HttpPut("/update")]
    public async Task<IActionResult> UpdateUser([FromBody] User user)
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
