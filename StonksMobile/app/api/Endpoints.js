const endpoints = {
    getStock: "/stock",
    getStockBySymbol: (symbol) => "/stock/${symbol}",

    getQoute:(symbol) => "/quote?symbol={symbol}"
    
}

export default endpoints;