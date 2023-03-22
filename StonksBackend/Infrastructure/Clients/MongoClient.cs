using StonksBackend.Domain.DataClients;
using MongoDB.Driver;

namespace StonksBackend.Infrastructure.Clients{
    public class MongoDBClient : IDatabaseClient{

        private readonly string _connectionString = "mongodb+srv://DevUser:lcupQyqgsU1q9x5h@cluster0.itishbf.mongodb.net/?retryWrites=true&w=majority";
        private MongoClient _mongoClient;

        public MongoDBClient(){
            _mongoClient = new MongoClient(_connectionString);
        }

        

    }
}