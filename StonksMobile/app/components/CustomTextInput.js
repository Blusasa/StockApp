import React from "react";
import { useState } from "react";

import { TextInput, View } from "react-native";
import appStyles from "../globals/styles/AppStyles";

const customTextInput = ({placeholderText, styles}) => {

    return (
        <View style={{backgroundColor: "black", borderStyle: "solid", borderColor: "black", borderWidth: "3px"}}>
        <TextInput
            caretHidden={true}
            style={appStyles.textInputBox}
            placeholder={placeholderText}
        />
        </View>
    );
};

export default customTextInput;