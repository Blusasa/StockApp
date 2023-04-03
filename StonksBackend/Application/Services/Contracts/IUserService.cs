using StonksBackend.Domain.Entities;
using StonksBackend.Services.DTOs;

namespace StonksBackend.Application.Services.Contracts{
    public interface IUserService{
        public Task<UserDTO> CreateUser(User user);

        public Task Login(User user);
        
        
    }
}