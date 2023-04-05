using StonksAPI.Application.DTOs;
using StonksAPI.Domain.Entities;

namespace StonksAPI.Application.Services.Contracts{
    public interface IUserService{
        public Task<UserDTO> CreateUser(User user);

        public Task Login(User user);

        public Task AddOrderToUser(Order order);

        public Task GetAssetsFromUser(User user);

        public Task GetUserBalance(User user);

        public Task CalculateUserCandles(User user);
    }
}