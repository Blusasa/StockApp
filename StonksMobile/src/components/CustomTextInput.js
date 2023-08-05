import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomTextInput = ({ placeholderText, styles, hideGradient }) => {
    const textInputElement = (
        <TextInput
            style={[InputStyles(styles).textInputBox]}
            placeholder={placeholderText}
            placeholderTextColor={"white"}
        />
    );


    const wrappedInGradientInput = (
        <LinearGradient
            content
            colors={['#B401FC', '#E91EAC']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[InputStyles().gradientStyle]}
        >
            {textInputElement}
        </LinearGradient>
    );

    return (
        <View style={{ flexShrink: 1, margin: 7 }}>
            {hideGradient ? textInputElement : wrappedInGradientInput}
        </View>
    );
};


const InputStyles = (styles) => StyleSheet.create({
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