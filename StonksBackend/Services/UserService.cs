using StonksBackend.Domain.Entities;
using StonksBackend.Domain;
using StonksBackend.Services.DTOs;
using StonksBackend.Infrastructure.Clients;
using MongoDB.Bson;

namespace StonksBackend.Services
{
    public class UserService{

        private IDataRepo<User> _userStore;
        private MongoDBClient _mongoDB;

        // Allows users-store to talk to database
        public UserService(IDataRepo<User> userStore, MongoDBClient _mongoDB){
            //private variable 
            this._userStore = userStore;
            _mongoDB = new MongoDBClient();
        }
        //creates user after all info is validated and cleansed 
        public async Task CreateUser(User user){

            User user2 = new User();

            _mongoDB.SetDB(MongoDBClient.Databases.DEV);
            _mongoDB.SetCollection(MongoDBClient.Collections.USERS);

            // await _mongoDB.CreateDocument(BsonDocument.Create(user2));

            throw new NotImplementedException();


        }

        public async Task LogIn(User user){

        }
    }
}