
namespace StonksAPI.Domain.Interfaces.Repositories
{
    public interface IDataRepo<T>
    {

        Task GetByIDAsync(String id);
        Task<T> AddEntityAsync(T entity);
        Task DeleteAsync(T entity);

    }
}