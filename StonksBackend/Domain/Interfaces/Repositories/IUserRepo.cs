using StonksBackend.Domain.Entities;

namespace StonksBackend.Domain.Interfaces.Repositories{

    public interface IUserRepo : IDataRepo<User>
    {
        
        public Task<Order> GetUserOrder(Order order);


    }
}