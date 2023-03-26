
namespace StonksBackend.Domain
{
    public interface IDataRepo<T>
    {

        Task<T> GetByIDAsync(String id);
        Task<T> AddEntityAsync(T entity);
        Task<T> DeleteAsync(T entity);

    }
}