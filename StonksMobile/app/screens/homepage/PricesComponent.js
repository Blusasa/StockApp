import { useState, useEffect, useReducer } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";
import StockBox from "../../components/stockbox/StockBox";
import AppStyles from "../../globals/styles/AppStyles";

const PricesComponent = () => {
    const [quoteData, setQouteData] = useState(null);

    const stocks = [
        {
          name: "Stock1",
          symbol: "STK1",
          currentPrice: 100,
          percentChange: 0.05
        },
        {
          name: "Stock2",
          symbol: "STK2",
          currentPrice: 50,
          percentChange: -0.02
        },
        {
          name: "Stock3",
          symbol: "STK3",
          currentPrice: 75,
          percentChange: 0.1
        }
    ];

    useEffect(() => {
        setQouteData(stocks);
    }, [])


    if(!quoteData) {
        return <ActivityIndicator color={"#E91EAC"} size={"large"}/>;
    }

    return (
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>
            {quoteData.map((value, index) => <StockBox key={value + index} quote={value}/>)}

        </View>
    );
};

export default PricesComponent;