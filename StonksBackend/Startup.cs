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
        private const string _corsPolicy = "AllowAll";

        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            
            ConfigureCors(services);
           
            //setup Client injections
            services.AddScoped<IMarketClient, FinnHubClient>();
            services.AddScoped<IDatabaseClient, DatabaseClient>();
            
            //setup data store injections
            services.AddScoped<IUserRepo, UserDataRepo>();
            services.AddScoped<IDataRepo<Order>, OrderDataRepo>();
            
            //setup service injections
            services.AddScoped<IStockService, StockService>();
            services.AddScoped<IUserService, UserService>();
            
            services.AddSingleton<IConfiguration>(_config);
        }

        private void ConfigureCors(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: _corsPolicy, policy =>
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

            app.UseCors(_corsPolicy);

            app.UseEndpoints(endpoints =>
            {
                app.MapControllers();
            });
        }
    }
}