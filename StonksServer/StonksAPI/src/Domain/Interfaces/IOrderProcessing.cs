namespace StonksAPI.Domain.Interfaces;

public interface IOrderProcessing : IHostedService
{
    public Task StartAsync(CancellationToken cancellationToken);

    public Task StopAsync(CancellationToken cancellationToken);
}