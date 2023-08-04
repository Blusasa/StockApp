import { StyleSheet } from "react-native";


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

export default StockBoxStyles;