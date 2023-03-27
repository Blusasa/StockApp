using StonksBackend.Domain.Entities;
using StonksBackend.Domain.Interfaces.Repositories;
using StonksBackend.Application.Services.Contracts;

namespace StonksBackend.Application.Services.Impls
{
    public class UserService : IUserService{

        private IUserRepo _userStore;

        // Allows users-store to talk to database
        public UserService(IUserRepo userStore){
            //private variable 
            _userStore = userStore;

        }

        //creates user after all info is validated and cleansed 
        public Task CreateUser(User user){
             return _userStore.AddEntityAsync(user);
        }

        public Task Login(User user){
            throw new NotImplementedException();
        }
    }
}