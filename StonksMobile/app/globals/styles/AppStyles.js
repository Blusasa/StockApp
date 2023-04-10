import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    flexContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text : {
        fontFamily: "Poppins_400Regular",
        alignSelf: "center",
        justifySelf: "center",
        color: "#ffffff"
    },
    textBold : {
        fontFamily: "Poppins_700Bold",
        alignSelf: "center",
        justifySelf: "center",
        color: "#ffffff"
    },
    textSemiBold: {
        fontFamily: "Poppins_600SemiBold",
        alignSelf: "center",
        justifySelf: "center",
        color: "#ffffff",
    },
});

export default AppStyles;