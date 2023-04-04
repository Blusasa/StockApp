using StonksBackend.CustomJSONFormatters;

using StonksBackend.Domain.Entities;
using StonksBackend.Domain.Interfaces.Clients;
using StonksBackend.Domain.Interfaces.Repositories;
using StonksBackend.Infrastructure.Clients;
using StonksBackend.Infrastructure.Repos;
using StonksBackend.Application.Services.Contracts;
using StonksBackend.Application.Services.Impls;

namespace StonksBackend
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