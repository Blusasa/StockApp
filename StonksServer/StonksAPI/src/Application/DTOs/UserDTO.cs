using StonksAPI.Domain.Entities;

namespace StonksAPI.Application.DTOs
{
    public class UserDTO{

        public string Username { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int Balance { get; set; }
        public Assets Assets { get; set; }
        public IEnumerable<Order> Orders { get; set; }

        public UserDTO()
        {
        }
    }
}