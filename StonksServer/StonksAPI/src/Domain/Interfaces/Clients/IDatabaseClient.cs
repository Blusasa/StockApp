
using MongoDB.Driver;
using StonksAPI.Domain.Entities;

namespace StonksAPI.Domain.Interfaces.Clients{
    public interface IDatabaseClient{
            //
            // public Task CreateRecord<T>(T entity) where T: class;
            //
            // public Task UpdateRecord<T>(T entity);
            //
            // // public void Set(string collectionName);
            //
            // public IMongoDatabase GetDatabase();
            //
            // public IMongoCollection<T> GetCollection<T>(IMongoDatabase db, string name);

            public IMongoCollection<AppUser> Users { get; }
            public IMongoCollection<Group> Groups { get;  }
    }
}