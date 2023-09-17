import React from "react";
import { TextInput, StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type CustomInputProps = {
    placeholderText: string,
    styles?: ViewStyle | TextStyle,
    hideGradient?: boolean
}

const CustomTextInput = ({ placeholderText, styles, hideGradient }: CustomInputProps) => {

    const textInputElement = (
        <TextInput
            style={[InputStyles(styles).textInputBox]}
            placeholder={placeholderText}
            placeholderTextColor={"white"}
        />
    );

    const wrappedInGradientInput = (
        <LinearGradient
            colors={['#B401FC', '#E91EAC']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[InputStyles(styles).gradientStyle]}
        >
            {textInputElement}
        </LinearGradient>
    );

    return (
        <View style={{ flex: 7, margin: 5 }}>
            {hideGradient ? textInputElement : wrappedInGradientInput}
        </View>
    );
};


const InputStyles = (styles: ViewStyle | TextStyle) => StyleSheet.create({
    gradientStyle: {
        justifyContent: "center",
        alignContent: "center",
        margin: 7,
        //The padding controls the size of the "BORDER" for the TextInput
        padding: 3,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 25,
        overflow: "hidden",
    },
    textInputBox: {
        height: 40,
        paddingLeft: 20,
        borderRadius: 25,
        backgroundColor: "black",
        textAlign: "left",
        fontFamily: "Poppins_400Regular",
        color: "white",
        ...styles
    }
});

export default CustomTextInput;