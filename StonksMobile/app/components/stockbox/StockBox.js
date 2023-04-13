import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";
import AppStyles from "../../globals/styles/AppStyles";
import StockBoxStyles from "./StockBoxStyles";
import FeatherIcon from "../../assets/rneIcons/FeatherIcon";

const StockBox = ({ quote }) => {
    const [stockInfo, setStockInfo] = useState({});



    useEffect(() => {
        // api.get(endpoints.getQoute("msft"))
        //     .then((res) => {
        //         console.log(res.data.quote);
        //         setStockInfo(res.data.quote);
        //     }).catch((err) => { });

        setStockInfo({
            currentPrice: 282.83,
            percentChange: -2.27883
        })
    }, []);

    if (!stockInfo || !stockInfo.currentPrice) return null;

    const stockIsNegative = (
        stockInfo.percentChange < 0 ? true : false
    );

    return (
        <View style={StockBoxStyles.shadow}>
        <View style={StockBoxStyles.boxContainer}>
            <View style={[StockBoxStyles.infoContainer]}>
                <Text style={[AppStyles.text, {fontSize: 20}]}>Microsoft</Text>
                <Text style={[AppStyles.text, { color: "grey", fontSize: 16, alignSelf: "flex-start"}]}>MSFT</Text>
            </View>
            <View style={StockBoxStyles.pricingContainer}>
                <Text style={[AppStyles.text, {fontSize: 20}]}>${stockInfo.currentPrice}</Text>
                <View style={StockBoxStyles.percentContainer}>
                    {stockIsNegative ? <FeatherIcon name={"arrow-down-left"} color={"#ff0000"}/> : <FeatherIcon name={"arrow-up-right"} color={"#00ff00"}/>}
                    <Text style={[AppStyles.text, {color: stockIsNegative ? "#ff0000" : "#00ff00", fontSize: 16, alignSelf: "flex-end"}]}>{stockInfo.percentChange.toFixed(2)}%</Text>
                </View>
            </View>
        </View>
        </View>
    );

}

export default StockBox;