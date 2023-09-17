

interface StockMetrics {
    yearlyMetrics: {
        high: number,
        low: number,
    },
    dailyMetrics: {
        open: number,
        high: number,
        low: number,
    },
    marketCap: number,
    beta?: number,
    

}