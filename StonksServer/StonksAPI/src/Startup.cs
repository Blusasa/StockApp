using System.Text.Json.Serialization;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Application.Services.Impls;
using StonksAPI.CustomJSONFormatters;
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
            
            ConfigureCors(services);
            ConfigureDependencies(services);
           

        }
        private void ConfigureDependencies(IServiceCollection services)
        {
            //setup Client injections
            services.AddScoped<IMarketClient, FinnHubClient>();
            services.AddScoped<IDatabaseClient, DatabaseClient>();
            
            //setup data store injections
            services.AddScoped<IUserRepo, UserDataRepo>();
            services.AddScoped<IStockRepo, StockRepo>();

            //setup service injections
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