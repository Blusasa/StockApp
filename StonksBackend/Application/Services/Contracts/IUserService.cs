using StonksBackend.Domain.Entities;

namespace StonksBackend.Application.Services.Contracts{
    public interface IUserService{
        public Task CreateUser(User user);

        public Task Login(User user);
    }
}