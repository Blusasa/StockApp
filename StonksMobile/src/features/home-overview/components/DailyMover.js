import { View, Text, StyleSheet, Pressable } from "react-native";

import FeatherIcon from "../../../assets/rneIcons/FeatherIcon";
import AppStyles from "../../../theme/AppStyles";


const DailyMover = ({ stockInfo }) => {
    let stockIsNegative = stockInfo.changesPercentage < 0;

    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
    }

    return (
        <View style={[AppStyles.flexContainer]}>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(255, 255, 255, 0.25)' : 'transparent' }]}>
                <View style={[MoverStyle.shadow]}>
                    <View style={[AppStyles.flexContainer, MoverStyle.container]}>

                        <Text style={[AppStyles.text, MoverStyle.symbol]}>{stockInfo.symbol}</Text>
                        <Text style={[AppStyles.text, MoverStyle.price]}>${round(stockInfo.price, 2)}</Text>
                        <View style={[MoverStyle.percentContainer]}>
                            {stockIsNegative ? <FeatherIcon name={"arrow-down-left"} color={"#ff0000"} size={20} /> : <FeatherIcon name={"arrow-up-right"} color={"#00ff00"} size={20} />}
                            <Text style={[AppStyles.text, MoverStyle.percentText, { color: stockIsNegative ? "#ff0000" : "#00ff00" }]}>{round(stockInfo.changesPercentage, 2)}%</Text>
                        </View>

                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const MoverStyle = StyleSheet.create({
    container: {
        width: 103,
        padding: 3,
        backgroundColor: "#000",
    },
    shadow: {
        borderBottomColor: "#E91EAC",
        borderRightColor: "#E91EAC",
        borderTopColor: "#94126d",
        borderLeftColor: "#94126d",
        borderWidth: 3,
        margin: 5,
    },
    symbol: {
        fontSize: 20,
        alignSelf: "flex-start"
    },
    price: {
        fontSize: 12,
        color: "grey",
        marginTop: -5,
        alignSelf: "flex-start"
    },
    percentContainer: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5
    },
    percentText: {
        fontSize: 15,
        marginLeft: 3
    }
})

export default DailyMover;