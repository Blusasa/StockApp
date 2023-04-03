import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";

const StockBox = () => {
    const [stockInfo, setStockInfo] = useState(null);

    useEffect(() => {
        api.get(endpoints.getStock)
                        .then((res) => {
                            console.log(res.data);
                            setStockInfo(res.data);
                        }).catch((err) => {});
    }, []);


    return(<View>{stockInfo && <Text>Apple Inc, AAPL, Price: ${stockInfo.c[0]}</Text>}</View>);

}

export default StockBox;