using StonksBackend.Domain.Entities;

namespace StonksBackend.Domain.DataStores{

    public interface IUserRepo{

        public Task GetUserByIDAsync(String id);

        public Task CreateUserAsync(User user);

        public Task UpdateUserAsync(User user);


    }
}