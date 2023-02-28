
namespace StonksBackend.Domain.Entities {
    public class User {
        private String _userID  { get; set; }
        private String _username { get; set; }
        private Assets _assets { get; set; }
        private int _balance { get; set; }
    }
}