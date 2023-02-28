using StonksBackend.Domain;
using StonksBackend.Domain.Entities;

namespace StonksBackend.Infrastructure{

    public class OrderDataRepo : IDataRepo<Order>
    {
        public Task<Order> addAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        public Task<Order> deleteAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        public Task<Order> getByIDAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<Order> updateAsync(Order entity)
        {
            throw new NotImplementedException();
        }
    }
}