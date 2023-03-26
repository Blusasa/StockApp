using StonksBackend.Domain.Entities;
using StonksBackend.Domain;
using StonksBackend.Domain.DataStores;
using MongoDB.Bson;

namespace StonksBackend.Services
{
    public class UserService : IServices{

        private IUserRepo _userStore;

        // Allows users-store to talk to database
        public UserService(IUserRepo userStore){
            //private variable 
            this._userStore = userStore;

        }
        //creates user after all info is validated and cleansed 
        public async Task CreateUser(User user){
             await _userStore.AddEntityAsync(user);
        }

        public async Task LogIn(User user){
        }
    }
}