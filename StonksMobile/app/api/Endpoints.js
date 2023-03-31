const endpoints = {
    getStock: "/stock",
    getStockBySymbol: (symbol) => "/stock/${symbol}",
}

export default endpoints;