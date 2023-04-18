import { StyleSheet } from "react-native";

const FrontPageStyles = StyleSheet.create({
    text: {
        fontSize: 70,
        textShadowColor: "#000000",
        textShadowOffset: { width: 5, height: 5},
        elevation: 5
    },
    btnContainer : { 
        flex: 1, 
        justifyContent: "flex-end", 
        marginBottom: 50 
    }
});

export default FrontPageStyles;