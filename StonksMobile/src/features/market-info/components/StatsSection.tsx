

interface StockStatistics {
    open: number,
    dayHigh: number,
    dayLow: number,
    yrHigh: number,
    yrLow: number,
    marketCap: number,
    dayVolume: number,
    tenDayVolume: number,
    peRatio: number,
    divYield: number,
    beta: number,
}

const StatsSection = () => {

    const stats: StockStatistics = {
        open: 178.35,
        dayHigh: 180.239,
        dayLow: 177.79,
        yrHigh: 198.23,
        yrLow: 124.17,
        marketCap: 2778862.8,
        dayVolume: 65212726,
        tenDayVolume: 60.95754,
        peRatio: 29.3253,
        divYield: 0.54066235,
        beta: 1.2241366,
    }   

}

export default StatsSection;