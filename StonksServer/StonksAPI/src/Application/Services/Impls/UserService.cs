using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Domain.Entities;
using StonksAPI.Domain.Interfaces.Repositories;

namespace StonksAPI.Application.Services.Impls
{
    public class UserService : IUserService{
        
        private UserManager<AppUser> _userManager;
        private SignInManager<AppUser> _signInManager;
        private IConfiguration _config;

        public UserService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration config){
            _userManager = userManager;
            _signInManager = signInManager;
            _config = config;
        }
        
        public async Task<IdentityResult> CreateUser(RegistrationDTO newUser)
        {
            AppUser user = new AppUser()
            {
                UserName = newUser.Username,
                Email = newUser.Email,
                PhoneNumber = newUser.Phone
            };

            return await _userManager.CreateAsync(user, newUser.Password);
        }

        public async Task<string> Login(LoginDTO login)
        {
            var user = await _userManager.FindByNameAsync(login.Username);
            if (user != null && await _userManager.CheckPasswordAsync(user, login.Password))
            {

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var expires = DateTime.Now.AddMinutes(5);

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                };
                
                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Audience"],
                    claims,
                    expires: DateTime.Now.AddMinutes(15),
                    signingCredentials: creds);

                return new JwtSecurityTokenHandler().WriteToken(token);
            }

            return null;
        }
        
        [Authorize]
        [Route("/checkIfTokenWorks")]
        public Task AddOrderToUser(Order order)
        {
            throw new NotImplementedException();
        }

        public Task GetAssetsFromUser(AppUser user)
        {
            throw new NotImplementedException();
        }

        public Task GetUserBalance(AppUser user)
        {
            throw new NotImplementedException();
        }

        public Task CalculateUserCandles(AppUser user)
        {
            throw new NotImplementedException();
        }

        public Task<IActionResult> GetUserOrdersByStock(string symbol)
        {
            throw new NotImplementedException();
        }
    }
}