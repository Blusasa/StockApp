
namespace StonksBackend.Domain.Entities {
    public class User {
        public int UserID  { get; set; }
        private string SessionID { get; set;}
        public string Username { get; set; }
        public string Password { get; set;}
        public string Email  { get; set;}
        public int Balance { get; set; }
        public IEnumerable<Order> Orders { get; set; }

        //no-args Constructor for BSON automapping
        public User(){}

    }
}