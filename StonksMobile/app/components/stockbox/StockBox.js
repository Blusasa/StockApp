import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";

const StockBox = () => {
    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        api.get(endpoints.getQoute("msft"))
                        .then((res) => {
                            console.log(res.data.quote.quote);
                            setStockInfo(res.data.quote);
                        }).catch((err) => {});
    }, []);

    if(!stockInfo || !stockInfo.currentPrice) return null;

    return(<View>{stockInfo.currentPrice}</View>);

}

export default StockBox;