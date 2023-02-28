using StonksBackend.Domain;
using StonksBackend.Domain.Entities;
using StonksBackend.Infrastructure;

namespace StonksBackend {
    public class Startup {

        public void ConfigureServices(IServiceCollection services){

            services.AddScoped<IDataRepo<User>, UserDataRepo>();
            services.AddScoped<IDataRepo<Order>, OrderDataRepo>();

        }
    }
}