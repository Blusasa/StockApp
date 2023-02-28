using StonksBackend.Domain.Entities;
using StonksBackend.Domain;

namespace StonksBackend.Infrastructure {

    public class UserDataRepo : IDataRepo<User>
    {
        public Task<User> addAsync(User entity)
        {
            throw new NotImplementedException();
        }

        public Task<User> deleteAsync(User entity)
        {
            throw new NotImplementedException();
        }

        public Task<User> getByIDAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<User> updateAsync(User entity)
        {
            throw new NotImplementedException();
        }
    }
}