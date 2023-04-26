namespace StonksAPI.Domain.Interfaces.Clients;

public interface ISocketQueueManager : IObserver<string>
{
    public Task<string> GetPriceAsync(string symbol);
}