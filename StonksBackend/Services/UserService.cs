using StonksBackend.Domain.Entities;
using StonksBackend.Domain;
using StonksBackend.Services.DTOs;

namespace StonksBackend.Services
{
    public class UserService{

        private IDataRepo<User> _userStore;

        // Allows users-store to talk to database
        public UserService(IDataRepo<User> userStore){
            //private variable 
            this._userStore = userStore;
        }
        //creates user after all info is validated and cleansed 
        public async Task<UserDTO> createUser(User user){
            throw new NotImplementedException();
        }
    }
}