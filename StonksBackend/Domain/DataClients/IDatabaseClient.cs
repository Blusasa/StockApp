

namespace StonksBackend.Domain.DataClients{
    public interface IDataBaseClient{

            public Task WriteToDocumentAsync<T>(T entity);
    }
}