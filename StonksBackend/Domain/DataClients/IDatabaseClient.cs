

namespace StonksBackend.Domain.DataClients{
    public interface IDatabaseClient{

            public Task CreateRecord<T>(T entity);

            public Task UpdateRecord<T>(T entity);

            public void Set<T>();
    }
}