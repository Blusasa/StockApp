
namespace StonksBackend.Domain.Interfaces.Repositories
{
    public interface IDataRepo<T>
    {

        Task GetByIDAsync(String id);
        Task AddEntityAsync(T entity);
        Task DeleteAsync(T entity);

    }
}