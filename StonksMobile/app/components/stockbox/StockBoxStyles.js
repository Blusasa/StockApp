import { StyleSheet } from "react-native";


const StockBoxStyles = StyleSheet.create({
    boxContainer: {
        flexShrink: 1,
        width: 300,
        flexDirection: "row",
        justifyContent: "space-between", // B401FC/
        padding: 5,
        // shadowColor: "#E91EAC",
        // shadowOffset: {width: 4, height: 4},
    },
    shadow : {
        borderBottomColor: "#E91EAC",
        borderRightColor: "#E91EAC",
        borderTopColor: "#94126d",
        borderLeftColor: "#94126d",
        borderWidth: 3,
        margin: 5
    },
    infoContainer: {
        flexShrink: 1,
        textAlign: "left",
        // justifyContent: "flex-start",
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

export default StockBoxStyles;