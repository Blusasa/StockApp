import { useState } from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from "react-native";

import { Theme, commonStyles, useTheme } from "../theme";

export type CustomBtnProps = {
    text: string,
    styles?: ViewStyle | TextStyle | ViewStyle[],
    onPress: (event: GestureResponderEvent) => void
}

const CustomBtn = ({text, styles, onPress}: CustomBtnProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const theme = useTheme();
    const componentStyles = btnStyles(theme);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    return (
        <Pressable
            style={({pressed}) => [pressed ? componentStyles.buttonPressed : componentStyles.buttonResting, styles, commonStyles.devBorder]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onLongPress={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={[componentStyles.btnText, isPressed && componentStyles.btnTextPressed]}>{text}</Text>
        </Pressable>
    );
};

const buttonResting: ViewStyle = {
    flex: 1,
    // margin: 5,
    // padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#54EF46",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
};

const btnText = (theme: Theme): TextStyle => ({
    ...theme.fonts.header,
    color: "#000000",
    fontSize: 20
});

const btnStyles = (theme: Theme) => StyleSheet.create({
    buttonResting: {
        ...buttonResting
    },
    buttonPressed: {
        ...buttonResting,
        backgroundColor: "#2A7D23",
        shadowColor: "grey",
        shadowOffset: { width: 5, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.7,
        borderColor: "#47e03a",
        borderStyle: "solid",
        borderWidth: 2
    },
    btnText: {
        ...btnText(theme),
    },
    btnTextPressed: {
        ...btnText(theme),
        color: "white"
    },
    shadowComponent : {
        backgroundColor: "transparent",
    }
});

export default CustomBtn;