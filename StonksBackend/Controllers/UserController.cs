using Microsoft.AspNetCore.Mvc;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Domain.Entities;

[ApiController]
[Route("[user]")]
public class UserController : ControllerBase
{
    private IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [Route("/newUser")]
    public async Task<IActionResult> CreateNewUser([FromBody] User user){
        await _userService.CreateUser(user);

        return Ok();
    }

}
