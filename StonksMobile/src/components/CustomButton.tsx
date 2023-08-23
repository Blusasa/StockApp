import { useState } from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from "react-native";

import { Theme, useTheme } from "../theme";

export type CustomBtnProps = {
    text: string,
    styles: ViewStyle | TextStyle,
    onPress: (event: GestureResponderEvent) => void
}

const CustomBtn = ({text, styles, onPress}: CustomBtnProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const theme = useTheme();
    const btnStyles = btnRegStyles(theme);
    const btnPressedStyles = btnPressed(theme);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    return (
        <Pressable
            style={[isPressed ? btnPressedStyles.btnPressed : btnStyles.button, styles]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onLongPress={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={[btnStyles.btnText, isPressed ? btnPressedStyles.btnTextPressed : btnStyles.btnText]}>{text}</Text>
        </Pressable>
    );
};

const btnRegStyles = (theme: Theme) => StyleSheet.create({
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
        ...theme.fonts.header,
        color: "#000000",
        fontSize: 20
    },
    shadowComponent : {
        backgroundColor: "transparent",
    }
});

const btnPressed = (theme: Theme) => StyleSheet.create({
    btnPressed: {
        ...btnRegStyles(theme).button,
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
        ...btnRegStyles(theme).btnText,
        color: "white"
    }
});

export default CustomBtn;