
namespace StonksBackend.Domain.Entities {
    public class User {
        private int _userID  { get; set; }
        public string _email  { get; set;}
        private string? _sessionID { get; set;}
        private string _username { get; set; }
        private string _password { get; set;}
        // private Assets? _assets { get; set; }
        private int _balance { get; set; }

        public User(){
            _userID = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
            _email = "defaultemail@gmail.com";
            _sessionID = null;
            _username = "DefaultUser";
            _password = "AdminSafeMode123!";
            // _assets = null;
            _balance = 10000;
        }
    }
}