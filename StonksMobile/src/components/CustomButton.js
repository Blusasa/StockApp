import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import AppStyles from "../theme/AppStyles";

const CustomBtn = ({ text, styles, onPress}) => {

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    return (
        <Pressable
            style={[isPressed ? btnPressed.btnPressed : btnStyle.button, styles]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onLongPress={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={[AppStyles.textSemiBold, isPressed ? btnPressed.btnTextPressed : btnStyle.btnText]}>{text}</Text>
        </Pressable>
    );
};

const btnStyle = StyleSheet.create({
    button: {
        height: 50,
        margin: 5,
        padding: 10,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#54EF46",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        elevation: 5
    },
    btnText: {
        color: "#000000",
        fontSize: 20
    },
    shadowComponent : {
        backgroundColor: "transparent",
    }
});

const btnPressed = StyleSheet.create({
    btnPressed: {
        ...btnStyle.button,
        backgroundColor: "#2A7D23",
        shadowColor: "grey",
        shadowOffset: { width: 5, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.7,
        borderColor: "#47e03a",
        borderStyle: "solid",
        borderWidth: 2
    },
    btnTextPressed: {
        ...btnStyle.btnText,
        color: "white"
    }
})

export default CustomBtn;