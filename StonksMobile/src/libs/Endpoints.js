const endpoints = {
    getStock: "/stock",
    getStockBySymbol: (symbol) => `/stock/${symbol}`,
    getQoute:(symbol) => `/api/Stocks/${symbol}/quote`
    
}

export default endpoints;