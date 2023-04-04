using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using StonksBackend.Domain.Entities;
using StonksBackend.Domain.Interfaces.Repositories;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Services.DTOs;

namespace StonksBackend.Application.Services.Impls
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

        public Task<IActionResult> GetUserOrdersByStock(string symbol)
        {
            throw new NotImplementedException();
        }
    }
}