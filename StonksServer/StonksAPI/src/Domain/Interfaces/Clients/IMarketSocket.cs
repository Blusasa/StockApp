namespace StonksAPI.Domain.Interfaces.Clients;

public interface IMarketSocket : IObservable<string>
{
    
    public void StartConnection();

    public void SubscribeToSymbol(string symbol);

    public void UnsubscribeToSymbol(string symbol);

    public void CloseConnection();
}