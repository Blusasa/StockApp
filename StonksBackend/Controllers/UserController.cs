


using Microsoft.AspNetCore.Mvc;
using StonksBackend.Services;
using StonksBackend.Domain.Entities;

[ApiController]
[Route("[user]")]
public class UserController : ControllerBase
{
    private UserService _userService;

    public UserController(UserService _userService)
    {
        this._userService = _userService;
    }

    // [HttpPost]
    // public async Task createUser(){
    // //    await _userService.CreateUser(user);
    // }

}
