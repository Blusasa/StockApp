using Microsoft.AspNetCore.Identity;
using StonksAPI.Application.DTOs;
using StonksAPI.Domain.Entities;
using StonksAPI.Helpers;

namespace StonksAPI.Application.Services.Contracts{
    public interface IUserService{
        public Task<AuthResult> CreateUser(RegistrationDTO newUser);

        public Task<AuthResult> Login(LoginDTO login);

        public Task<AppUser> GetUserByEmailAsync(string email);

        public Task AddOrderToUser(Order order);

        public Task GetAssetsFromUser(AppUser user);

        public Task GetUserBalance(AppUser user);

        public Task CalculateUserCandles(AppUser user);
    }
}