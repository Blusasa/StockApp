import { View, Text, StyleSheet } from "react-native";

import AssetChart from "./AssetChart";
import AppStyles from "../theme/AppStyles";
import FeatherIcon from "../assets/rneIcons/FeatherIcon";

const StockBox = ({ stockInfo }) => {
    let stockIsNegative = stockInfo.percentChange < 0;

    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
    }

    return (
        <View style={[StockBoxStyles.boxContainer]}>
            <View style={[StockBoxStyles.infoContainer, {marginRight: 10}]}>
                <Text style={[AppStyles.text, { fontSize: 24, alignSelf: "flex-start" }]}>{stockInfo.name}</Text>
                <Text style={[AppStyles.text, { color: "grey", fontSize: 18, alignSelf: "flex-start" }]}>{stockInfo.symbol}</Text>
            </View>
            <AssetChart />
            <View style={[StockBoxStyles.pricingContainer, {marginLeft: 10}]}>
                <Text style={[AppStyles.text, { fontSize: 24, alignSelf: "flex-end" }]}>${round(stockInfo.currentPrice, 2)}</Text>
                <View style={[StockBoxStyles.percentContainer]}>
                    {
                        stockIsNegative ?
                            <FeatherIcon name={"arrow-down-left"} color={"#ff0000"} size={30} />
                            : <FeatherIcon name={"arrow-up-right"} color={"#00ff00"} size={30} />
                    }
                    <Text style={[AppStyles.text, { color: stockIsNegative ? "#ff0000" : "#00ff00", fontSize: 18, alignSelf: "flex-end" }]}>{round(stockInfo.percentChange, 2)}%</Text>
                </View>
            </View>
        </View>
    );
};

const StockBoxStyles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        width: 350,
        flexDirection: "row",
        justifyContent: "space-between", // B401FC/
        alignItems: "center",
        padding: 5,
        backgroundColor: "transparent"
    },
    infoContainer: {
        flex: 1,
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
    pricingContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    percentContainer : {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});

export default StockBox;