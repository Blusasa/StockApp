using StonksAPI.Domain.Entities;

namespace StonksAPI.Domain.Interfaces.Repositories{

    public interface IUserRepo : IDataRepo<User>
    {
        
        public Task<Order> GetUserOrder(Order order);


    }
}