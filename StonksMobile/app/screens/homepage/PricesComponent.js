import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";
import StockBox from "../../components/stockbox/StockBox"

const PricesComponent = () => {
    const [quoteData, setQouteData] = useState(undefined);

   /* useEffect(() => {
        api.get(endpoints.getQoute('AAPL'))
            .then((res) => {
                console.log(res.data);
                setQouteData(res.data.quote);
            }).catch((err) => { });
    }, []);
    */


    if (!quoteData) return null;

    return (
        <View style={appStyles2.flexContainer}>

        <StockBox/>
        </View>
    );
};

export default PricesComponent;