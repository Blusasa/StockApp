using System.ComponentModel.DataAnnotations;

namespace StonksAPI.Application.DTOs;

public class RegistrationDTO
{
    [Required]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string Phone { get; set; }
    
}