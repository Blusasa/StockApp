
namespace StonksBackend.Domain
{
    public interface IDataRepo<T>
    {

        Task<T> getByIDAsync(String id);
        Task<T> addAsync(T entity);
        Task<T> updateAsync(T entity);
        Task<T> deleteAsync(T entity);

    }
}