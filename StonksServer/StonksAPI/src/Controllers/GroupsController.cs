using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace StonksAPI.Controllers;
public class GroupsController : BaseApiController
{

    [HttpPost]
    [Route("create")]
    public async Task<IActionResult> CreateNewGroup()
    {
        return Ok();
    }

    [HttpGet]
    [Route("join-code")]
    public async Task<IActionResult> GetJoinCode()
    {
        return Ok();
    }


    [HttpDelete]
    [Route("delete/{groupID}")]
    public async Task<IActionResult> DeleteGroup()
    {
        return Ok();
    }
    
    [HttpPost]
    [Route("invite/{userID}")]
    public async Task<IActionResult> InviteUserToGroup()
    {
        return Ok();
    }

    [HttpDelete]
    [Route("kick/{userID}")]
    public async Task<IActionResult> KickUserFromGroup()
    {
        return Ok();
    }
}