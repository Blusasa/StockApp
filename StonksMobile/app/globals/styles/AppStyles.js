import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    flexContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainApp : {
        backgroundColor: "#000000"
    },
    devBorder : {
        borderColor: "red",
        borderStyle: "dashed",
        borderWidth: 3
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
    componentContainerBackground: {
        backgroundColor: "rgba(166,166,166,0.3)"
    },
    componentHeader: {
        fontSize: 30,
        alignSelf: "flex-start"
    },
    pressableIn: {
        backgroundColor: "rgba(255, 255, 255, 0.25)"
    }
});

export default AppStyles;