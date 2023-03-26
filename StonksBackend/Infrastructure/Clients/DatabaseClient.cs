using StonksBackend.Domain.DataClients;

using MongoDB.Driver;
using MongoDB.Bson;

using Microsoft.Extensions.Configuration;

namespace StonksBackend.Infrastructure.Clients{
    public class DatabaseClient : IDatabaseClient{
        private MongoClient _mongoClient;
        private const string _dbName = "Stonks_Dev";
        private string? _currentCollection = null; 

        public DatabaseClient(IConfiguration config){
            _mongoClient = new MongoClient(config.GetConnectionString("MongoDB"));
            _currentCollection = "";
        }

        public async Task CreateRecord<T>(T entity) where T: class
        {
            if(_currentCollection == null){
                throw new Exception("Collection not set. Call Set(string collection) first");
            }

            var collection = getDatabase().GetCollection<BsonDocument>(_currentCollection);

            BsonDocument entityDoc = BsonExtensionMethods.ToBsonDocument(entity);

            await collection.InsertOneAsync(entityDoc);
        }

        public Task UpdateRecord<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Set(string collection)
        {
            _currentCollection = collection;
        }

        private IMongoDatabase getDatabase(){
            return _mongoClient.GetDatabase(_dbName);
        }
    }
}