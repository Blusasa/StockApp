using System.Collections.Concurrent;
using StonksAPI.Application.DTOs;
using StonksAPI.Domain.Entities;

namespace StonksAPI.Application.Services.Impls;

public class OrderManager
{
    private ConcurrentQueue<Order> submittedOrders;
    private ConcurrentQueue<Order> ordersReadyForProcessing;

    public OrderManager()
    {
    }

    public async Task<long> GenerateOrderAndSubmit(TradeRequestDTO requestDto)
    {

        Order order = new Order
        {
            TimeStamp = DateTime.Now,
            Symbol = requestDto.Symbol,
            SharesTraded = requestDto.RequestedSharesAmount,
            CurrencyTraded = requestDto.RequestedMonetaryAmount,
            OrderStatus = OrderStatus.Submitted
        };

        return 45234236423432;
    }

}