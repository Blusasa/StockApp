using StonksBackend.Domain.DataClients;

using MongoDB.Driver;
using MongoDB.Bson;

using Microsoft.Extensions.Configuration;

namespace StonksBackend.Infrastructure.Clients{
    public class DatabaseClient : IDatabaseClient{
        private MongoClient _mongoClient;
        private const string _dbName = "Stonks_Dev";
        private string _currentCollection; 

        public DatabaseClient(IConfiguration config){
            _mongoClient = new MongoClient(config.GetConnectionString("MongoDB"));
            _currentCollection = "";
        }

        public Task CreateRecord<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateRecord<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Set<T>()
        {
            throw new NotImplementedException();
        }        

    }
}