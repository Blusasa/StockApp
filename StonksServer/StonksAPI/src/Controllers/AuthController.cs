using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Configs;

namespace StonksAPI.Controllers;


[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly JwtConfig _jwtConfig;
    private readonly IUserService _userService;


    public AuthController(IUserService userService, IOptions<JwtConfig> config)
    {
        _userService = userService;
        _jwtConfig = config.Value;
    }


    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> Register([FromBody] RegistrationDTO registration)
    {
        var result = await _userService.CreateUser(registration);

        if (result.Authenticated)
        {
            return Created("/login", result);
        }

        return BadRequest(result.errors);
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] LoginDTO login)
    {
        var result = await _userService.Login(login);

        if (result.Authenticated) return Ok(result);
        return Unauthorized(result);
    }
}