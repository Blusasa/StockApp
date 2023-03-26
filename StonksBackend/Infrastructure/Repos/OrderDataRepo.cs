using StonksBackend.Domain;
using StonksBackend.Domain.Entities;

namespace StonksBackend.Infrastructure.Repos{

    public class OrderDataRepo : IDataRepo<Order>
    {

        public Task<Order> AddEntityAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        public Task<Order> DeleteAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetByIDAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}