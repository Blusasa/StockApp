using StonksBackend.Domain;
using StonksBackend.Domain.Entities;
using StonksBackend.Domain.DataClients;
using StonksBackend.Infrastructure.Clients;
using StonksBackend.Infrastructure.Repos;
using StonksBackend.Services;

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

            services.AddScoped<IDataRepo<User>, UserDataRepo>();
            services.AddScoped<IDataRepo<Order>, OrderDataRepo>();
            services.AddScoped<IDatabaseClient, DatabaseClient>();
            
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