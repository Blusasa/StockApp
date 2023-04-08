using System.Configuration;
using System.Text;
using System.Text.Json.Serialization;
using AspNetCore.Identity.MongoDbCore.Extensions;
using AspNetCore.Identity.MongoDbCore.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Application.Services.Impls;
using StonksAPI.CustomJSONFormatters;
using StonksAPI.Domain.Entities;
using StonksAPI.Domain.Interfaces.Clients;
using StonksAPI.Domain.Interfaces.Repositories;
using StonksAPI.Infrastructure.Clients;
using StonksAPI.Infrastructure.Clients.Market;
using StonksAPI.Infrastructure.Repos;

namespace StonksAPI
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private const string CorsPolicy = "AllowAll";

        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.Converters.Add(new DateTimeJson());
                    options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
                });

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddHttpContextAccessor();

            ConfigureCors(services);
            ConfigureDependencies(services);
            ConfigureIdentity(services);
            ConfigureAuth(services);
        }

        private void ConfigureIdentity(IServiceCollection services)
        {
            var mongoIdentityConfig = new MongoDbIdentityConfiguration()
            {
                MongoDbSettings = new MongoDbSettings()
                {
                    
                    ConnectionString = _config.GetConnectionString("MongoDb"),
                    DatabaseName = "Stonks_Dev"
                },
                IdentityOptionsAction = options =>
                {
                    options.Password.RequireDigit = true;
                    options.Password.RequireLowercase = true;
                    options.Password.RequireNonAlphanumeric = true;
                    options.Password.RequireUppercase = true;
                    options.Password.RequiredLength = 8;
                    options.Password.RequiredUniqueChars = 1;

                    options.User.AllowedUserNameCharacters =
                        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+!";
                    options.User.RequireUniqueEmail = true;

                    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(3);
                    options.Lockout.AllowedForNewUsers = false;
                    options.Lockout.MaxFailedAccessAttempts = 5;
                }
            };
            
            services.ConfigureMongoDbIdentity<AppUser>(mongoIdentityConfig);
        }

        private void ConfigureAuth(IServiceCollection services)
        {

            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromMinutes(5);
                options.LoginPath = "/Users/Login";
                options.SlidingExpiration = true;
            });
            
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = _config["Jwt:Issuer"],
                        ValidAudience = _config["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]))
                    };
                });
        }

        private void ConfigureDependencies(IServiceCollection services)
        {
            //setup Client injections
            services.AddScoped<IMarketClient, FinnHubClient>();
            services.AddScoped<IDatabaseClient, DatabaseClient>();

            //setup data store injections
            services.AddScoped<IStockRepo, StockRepo>();

            //setup service injections
            services.AddScoped<UserManager<AppUser>>();
            services.AddScoped<SignInManager<AppUser>>();
            services.AddScoped<IStockService, StockService>();
            services.AddScoped<IUserService, UserService>();

            services.AddSingleton(_config);
        }

        private void ConfigureCors(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: CorsPolicy, policy =>
                {
                    policy.WithOrigins("http://localhost:19006")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });
        }

        public void Configure(WebApplication app, IWebHostEnvironment environment)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseCors(CorsPolicy);

            app.MapControllers();
        }
    }
}