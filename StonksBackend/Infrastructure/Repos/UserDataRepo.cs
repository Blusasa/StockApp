using StonksBackend.Domain.Entities;
using StonksBackend.Domain.DataClients;
using StonksBackend.Domain.DataStores;

namespace StonksBackend.Infrastructure.Repos {

    public class UserDataRepo : IUserRepo
    {

        private IDatabaseClient _dbClient;
        private string _collectionName = "Users";

        public UserDataRepo(IDatabaseClient client){
            _dbClient = client;
        }

        public Task<User> GetByIDAsync(string id){
            throw new NotImplementedException();
        }

        public async Task AddEntityAsync(User entity)
        {
            _dbClient.Set(_collectionName);
            await _dbClient.CreateRecord<User>(entity);
        }

        public Task<User> DeleteAsync(User entity)
        {
            throw new NotImplementedException();
        }
    }
}