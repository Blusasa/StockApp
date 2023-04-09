import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const CustomBtn = ({ text, styles, onPress}) => {

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    return (
        <Pressable
            style={[isPressed ? btnPressed.btnPressed : btnStyl.button, styles]}
            onPress={() => {}}
            onPressIn={handlePressIn}
            onLongPress={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={isPressed ? btnPressed.btnTextPressed : btnStyl.btnText}>{text}</Text>
        </Pressable>
    );
};

const btnStyl = StyleSheet.create({
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
        borderColor: "black"
    },
    btnText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20
    }
});

const btnPressed = StyleSheet.create({
    btnPressed: {
        ...btnStyl.button,
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
        ...btnStyl.btnText,
        color: "white"
    }
})

export default CustomBtn;