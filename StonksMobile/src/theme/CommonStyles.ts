import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    flexColumn: {
        flex: 1,
        flexDirection: "column",
    },
    flexRow: {
        flex: 1,
        flexDirection: "row"
    },
    centerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerSelf: {
        alignSelf: "center"
    },


    devBorder: {
        borderColor: "#fff",
        borderWidth: 2
    }
});