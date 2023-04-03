using StonksBackend.Domain.Entities;
using StonksBackend.Domain.Interfaces.Repositories;
using StonksBackend.Domain.Interfaces.Clients;

namespace StonksBackend.Infrastructure.Repos {

    public class UserDataRepo : IUserRepo
    {

        private IDatabaseClient _dbClient;
        private string _collectionName = "Users";

        public UserDataRepo(IDatabaseClient client){
            _dbClient = client;
        }

        public Task GetByIDAsync(string id){
            throw new NotImplementedException();
        }

        public async Task<User> AddEntityAsync(User entity)
        {
            _dbClient.Set(_collectionName);
            await _dbClient.CreateRecord(entity);
            return entity;
        }

        public Task DeleteAsync(User entity)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetUserOrder(Order order)
        {
            throw new NotImplementedException();
        }
    }
}