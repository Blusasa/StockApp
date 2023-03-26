using Microsoft.AspNetCore.Mvc;
using StonksBackend.Services;
using StonksBackend.Domain.Entities;

[ApiController]
[Route("[user]")]
public class UserController : ControllerBase
{
    private UserService _userService;

    public UserController(UserService userService)
    {
        _userService = new UserService();
    }

    [HttpPost]
    [Route("/newUser")]
    public async Task<IActionResult> CreateNewUser([FromBody] User user){
        await _userService.CreateUser(user);

        return Ok();
    }

}
