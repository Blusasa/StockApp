using MongoDB.Bson;
using MongoDB.Driver;
using StonksAPI.Domain.Entities;
using StonksAPI.Domain.Interfaces.Clients;

namespace StonksAPI.Infrastructure.Clients{
    public class DatabaseClient : IDatabaseClient{
        private readonly MongoClient _mongoClient;
        private const string DbName = "Stonks_Dev";

        public DatabaseClient(IConfiguration config){
            _mongoClient = new MongoClient(config.GetConnectionString("MongoDB"));
        }

        public IMongoCollection<AppUser> Users => _mongoClient.GetDatabase(DbName).GetCollection<AppUser>("users");

        public IMongoCollection<Group> Groups => _mongoClient.GetDatabase(DbName).GetCollection<Group>("groups");
        
    }
}