using System.Configuration;
using System.Text;
using System.Text.Json.Serialization;
using AspNetCore.Identity.MongoDbCore.Extensions;
using AspNetCore.Identity.MongoDbCore.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

using StonksAPI.Application.Services.Contracts;
using StonksAPI.Application.Services.Impls;
using StonksAPI.CustomJSONFormatters;
using StonksAPI.Domain.Entities;
using StonksAPI.Domain.Interfaces.Clients;
using StonksAPI.Domain.Interfaces.Repositories;
using StonksAPI.Infrastructure.Clients;
using StonksAPI.Infrastructure.Clients.Market;
using StonksAPI.Infrastructure.Repos;
using StonksAPI.Configs;

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
            ConfigureSwagger(services);
            services.AddHttpContextAccessor();

            ConfigureCors(services);
            ConfigureDependencies(services);
            ConfigureIdentity(services);
            ConfigureAuth(services);
        }

        private void ConfigureSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v0.3", new OpenApiInfo
                {
                    Title = "Stonks API", Version = "0.3"
                });
                
                var jwtSecurityScheme = new OpenApiSecurityScheme
                {
                    BearerFormat = "JWT",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = JwtBearerDefaults.AuthenticationScheme,
                    Description = "JWT Bearer token",
                    Reference = new OpenApiReference
                    {
                        Id = JwtBearerDefaults.AuthenticationScheme,
                        Type = ReferenceType.SecurityScheme
                    }
                };

                c.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    { jwtSecurityScheme, Array.Empty<string>() }
                });
            });
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
            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    var key = Encoding.ASCII.GetBytes(_config.GetSection("Jwt:Key").Value);
                    
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        
                        //false for dev
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        RequireExpirationTime = false,
                        
                        ValidateLifetime = true,
                    };

                    options.Events = new JwtBearerEvents()
                    {
                        OnMessageReceived = async context =>
                        {
                            var pause = 2 + 2;
                        },
                        OnAuthenticationFailed = async context =>
                        {
                            var ex = context.Exception;
                        },
                        OnForbidden = async context =>
                        {
                            var ex = context;
                        }
                    };
                });
        }

        private void ConfigureDependencies(IServiceCollection services)
        {
            services.Configure<JwtConfig>(_config.GetSection("Jwt"));
            
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
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("swagger/v0.3/swagger.json", "Stonks API");
                    c.RoutePrefix = string.Empty;
                });
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(CorsPolicy);

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapControllers();
            
        }
    }
}