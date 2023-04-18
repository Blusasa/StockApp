using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace StonksAPI.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class GroupsController : ControllerBase
{

    [HttpPost]
    [Route("new-group")]
    public async Task<IActionResult> CreateNewGroup()
    {
        return Ok();
    }
    
    [HttpPost]
    [Route("invite-member")]
    public async Task<IActionResult> InviteUserToGroup()
    {
        return Ok();
    }

    [HttpDelete]
    [Route("kick-member")]
    public async Task<IActionResult> KickUserFromGroup()
    {
        return Ok();
    }
}