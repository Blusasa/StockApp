using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.IdentityModel.JsonWebTokens;

using StonksAPI.Application.DTOs;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Domain.Entities;
using StonksAPI.Helpers;
using StonksAPI.Configs;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace StonksAPI.Application.Services.Impls
{
    public class UserService : IUserService{
        
        private readonly UserManager<AppUser> _userManager;
        private readonly JwtConfig _config;

        public UserService(UserManager<AppUser> userManager, IOptions<JwtConfig> config){
            _userManager = userManager;
            _config = config.Value;
        }
        
        public async Task<AuthResult> CreateUser(RegistrationDTO newUser)
        {
            AppUser user = new AppUser()
            {
                UserName = newUser.Username,
                Email = newUser.Email,
                PhoneNumber = newUser.Phone
            };

            var isCreated = await _userManager.CreateAsync(user, newUser.Password);

            if (isCreated.Succeeded)
            {
                var token = GenerateJwt(user);
                return new AuthResult
                {
                    Token = token,
                    Authenticated = true,
                };
            }

            return new AuthResult
            {
                Authenticated = false,
                errors = isCreated.Errors.Select(e => e.Description).ToList()
            };
        }

        public async Task<AuthResult> Login(LoginDTO login)
        {
            var user = await _userManager.FindByNameAsync(login.Username);
            if (user != null && await _userManager.CheckPasswordAsync(user, login.Password))
            {
                var token = GenerateJwt(user);
                return new AuthResult
                {
                    Token = token,
                    Authenticated = true
                };
            }

            return new AuthResult
            {
                Authenticated = false,
                errors =new List<string>
                {
                    "Invalid credentials"
                }
            };
        }

        private string GenerateJwt(AppUser user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_config.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new []
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToUniversalTime().ToString())
                }),
                
                NotBefore = DateTime.Now,
                Expires = DateTime.Now.AddMinutes(60),
                Issuer = _config.Iss,
                Audience = _config.Aud,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256),
            };

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            var jwt = jwtTokenHandler.WriteToken(token);
            return jwt;
        }

        public async Task<AppUser> GetUserByEmailAsync(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        public  string GetUserBalanceHistory(AppUser user)
        {
            return "woo";
        }

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