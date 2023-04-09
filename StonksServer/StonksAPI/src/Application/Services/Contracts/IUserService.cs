using Microsoft.AspNetCore.Identity;
using StonksAPI.Application.DTOs;
using StonksAPI.Domain.Entities;

namespace StonksAPI.Application.Services.Contracts{
    public interface IUserService{
        public Task<IdentityResult> CreateUser(RegistrationDTO newUser);

        public Task<string> Login(LoginDTO login);

        public Task AddOrderToUser(Order order);

        public Task GetAssetsFromUser(AppUser user);

        public Task GetUserBalance(AppUser user);

        public Task CalculateUserCandles(AppUser user);
    }
}