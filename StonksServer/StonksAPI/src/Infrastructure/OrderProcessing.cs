using System.Collections.Concurrent;
using StonksAPI.Application.Services.Contracts;
using StonksAPI.Domain.Entities;
using StonksAPI.Domain.Interfaces;
using StonksAPI.Domain.Interfaces.Clients;

namespace StonksAPI.Infrastructure;

public class OrderProcessing : IOrderProcessing
{

    private readonly object _lockObj = new object();
    private readonly ConcurrentQueue<Order> _pendingOrders = new ConcurrentQueue<Order>();
    private readonly CancellationTokenSource _cancellationTokenSource = new CancellationTokenSource();

    public OrderProcessing()
    {
    }

    public void QueueOrder(Order order)
    {
        _pendingOrders.Enqueue(order);
    }
    
    public Task StartAsync(CancellationToken cancellationToken)
    {
        while (!_cancellationTokenSource.IsCancellationRequested)
        {
            // if (!_pendingOrders.IsEmpty)
            // {
            //     _pendingOrders.TryDequeue(out var order);
            //     var price = double.Parse(_stockService.GetLivePrice(order.Symbol));
            //
            //     if (order.StockRequestedByCurrency != null && order.StockRequestedByCurrency != 0)
            //     {
            //         var sharesTraded = price / order.StockRequestedByCurrency;
            //         order.SharesTraded = (double)sharesTraded;
            //         order.CurrencyTraded = (double)order.StockRequestedByCurrency;
            //     }
            //     else
            //     {
            //         var currencyTraded = price / order.StockRequestedByShare;
            //         order.CurrencyTraded = (double)currencyTraded;
            //         order.SharesTraded = (double)order.StockRequestedByShare;
            //     }

                

            // }
        }

        return Task.Run(() => Console.WriteLine("woo"));
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.Run(() => _cancellationTokenSource.Cancel(), cancellationToken);
    }
}