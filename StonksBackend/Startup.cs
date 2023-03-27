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

        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddScoped<IUserRepo, UserDataRepo>();
            services.AddScoped<IDataRepo<Order>, OrderDataRepo>();
            services.AddScoped<IDatabaseClient, DatabaseClient>();

            services.AddScoped<IUserService, UserService>();
            
            services.AddSingleton<IConfiguration>(_config);
        }

        public void Configure(WebApplication app, IWebHostEnvironment environment)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();
        }

    }
}