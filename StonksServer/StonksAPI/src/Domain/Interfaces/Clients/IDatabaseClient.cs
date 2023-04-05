
namespace StonksAPI.Domain.Interfaces.Clients{
    public interface IDatabaseClient{

            public Task CreateRecord<T>(T entity) where T: class;

            public Task UpdateRecord<T>(T entity);

            public void Set(string collectionName);
    }
}