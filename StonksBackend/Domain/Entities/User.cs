
namespace StonksBackend.Domain.Entities {
    public class User {
        public int _userID  { get; set; }
        public string _email  { get; set;}
        private string _sessionID { get; set;}
        public string _username { get; set; }
        public string _password { get; set;}
        // private Assets? _assets { get; set; }
        public int _balance { get; set; }

        //no-args Constructor for BSON automapping
        public User(){}
    }
}