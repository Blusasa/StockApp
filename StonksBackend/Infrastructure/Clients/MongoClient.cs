using StonksBackend.Domain.DataClients;
using MongoDB.Driver;
using MongoDB.Bson;

namespace StonksBackend.Infrastructure.Clients{
    public class MongoDBClient{

        private readonly string _connectionString = "mongodb+srv://DevUser:lcupQyqgsU1q9x5h@cluster0.itishbf.mongodb.net/?retryWrites=true&w=majority";
        private MongoClient _mongoClient;
        private string[] _databases;
        private string _currentDB;
        private string _currentCollection; 

        public MongoDBClient(){
            _mongoClient = new MongoClient(_connectionString);
            _databases = new string[]{"Stonks_Dev"};
            _currentDB = "";
            _currentCollection = "";
        }


        public async Task CreateDocument(BsonDocument entity){
            if(_currentDB == ""|| _currentCollection == ""){
                throw new ArgumentException("Please set database and collection before inserting document");
            }

           var collection = _mongoClient.GetDatabase(_currentDB).GetCollection<BsonDocument>(_currentCollection);
           await collection.InsertOneAsync(entity);
        }

        public void SetDB(Databases database){
            if(database == Databases.DEV){
                _currentDB = _databases[0];
            } else {
                throw new ArgumentException("Database type not found");
            }
        }

        public void SetCollection(Collections collection){
            if(collection == Collections.USERS){
                _currentCollection = "Users";
            } else {
                throw new ArgumentException("Collection type not found");
            }
        }


        public enum Databases {
            DEV
        }


        public enum Collections{
            USERS
        }
        

    }
}