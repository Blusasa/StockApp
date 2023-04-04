namespace StonksBackend.Services.DTOs
{
    //USERDTO  transports data to front end . The data that is needed for the front end
    public class UserDTO{

        public string Username { get; set; }
        public string Email { get; set; }
        public int Balance { get; set; }

    }
}