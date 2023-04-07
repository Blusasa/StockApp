using System.ComponentModel.DataAnnotations;
using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace StonksAPI.Domain.Entities {
    
    [CollectionName("Users")]
    public class AppUser : MongoIdentityUser
    {
        [Required(ErrorMessage = "Username field is required")]
        public override string UserName { get; set; }
        
        [Required(ErrorMessage = "Phone number field is required")]
        public override string PhoneNumber { get; set; }
        public Assets assets { get; set; }
        public int Balance { get; set; }
        public IEnumerable<Order> Orders { get; set; }

        public AppUser() : base()
        {
        }

        public AppUser(string username, string email) : base(username, email)
        {
        }

    }
}