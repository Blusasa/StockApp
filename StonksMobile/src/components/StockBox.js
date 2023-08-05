import { View, Text } from "react-native";

import AppStyles from "../theme/AppStyles";
import FeatherIcon from "../assets/rneIcons/FeatherIcon";

const StockBox = ({ stockInfo }) => {
    let stockIsNegative = stockInfo.percentChange < 0;

    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
    }

    return (
        <View style={StockBoxStyles.boxContainer}>
            <View style={[StockBoxStyles.infoContainer]}>
                <Text style={[AppStyles.text, { fontSize: 24, alignSelf: "flex-start" }]}>{stockInfo.name}</Text>
                <Text style={[AppStyles.text, { color: "grey", fontSize: 18, alignSelf: "flex-start" }]}>{stockInfo.symbol}</Text>
            </View>
            <View style={StockBoxStyles.pricingContainer}>
                <Text style={[AppStyles.text, { fontSize: 24 }]}>${round(stockInfo.currentPrice, 2)}</Text>
                <View style={StockBoxStyles.percentContainer}>
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
    shadow : {
        height: 75,
        // borderBottomColor: "#E91EAC",
        // borderRightColor: "#E91EAC",
        // borderTopColor: "#94126d",
        // borderLeftColor: "#94126d",
        // borderWidth: 3,
        margin: 5
    },
    infoContainer: {
        flex: 1,
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
    pricingContainer: {
        flexShrink: 1,
        justifyContent: "flex-end"
    },
    percentContainer : {
        flexShrink: 1,
        flexDirection: "row",
    },
});

export default StockBox;