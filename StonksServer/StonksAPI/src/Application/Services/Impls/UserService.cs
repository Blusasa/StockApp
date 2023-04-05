using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Domain.Entities;
using StonksAPI.Domain.Interfaces.Repositories;

namespace StonksAPI.Application.Services.Impls
{
    public class UserService : IUserService{

        private IUserRepo _userStore;

        // Allows users-store to talk to database
        public UserService(IUserRepo userStore){
            //private variable 
            _userStore = userStore;

        }

        //creates user after all info is validated and cleansed 
        public async Task<UserDTO> CreateUser(User user){
             User insertedUser = await _userStore.AddEntityAsync(user);

             var cfg = new MapperConfiguration(cfg => { cfg.CreateMap<User, UserDTO>(); });
             return cfg.CreateMapper().Map<User, UserDTO>(insertedUser);
        }
        
        
        public Task Login(User user){
            throw new NotImplementedException();
        }

        public Task AddOrderToUser(Order order)
        {
            throw new NotImplementedException();
        }

        public Task GetAssetsFromUser(User user)
        {
            throw new NotImplementedException();
        }

        public Task GetUserBalance(User user)
        {
            throw new NotImplementedException();
        }

        public Task CalculateUserCandles(User user)
        {
            throw new NotImplementedException();
        }

        public Task<IActionResult> GetUserOrdersByStock(string symbol)
        {
            throw new NotImplementedException();
        }
    }
}