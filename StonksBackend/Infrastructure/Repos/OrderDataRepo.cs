using StonksBackend.Domain;
using StonksBackend.Domain.Entities;

namespace StonksBackend.Infrastructure.Repos{

    public class OrderDataRepo : IDataRepo<Order>
    {

        public Task AddEntityAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        public Task GetByIDAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}