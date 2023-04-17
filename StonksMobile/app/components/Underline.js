import { StyleSheet, View } from "react-native";

const Underline = () => {

    return (
        <View style={UnderlineStyle.underline}/>
    );
};

const UnderlineStyle = StyleSheet.create({
    "underline": {
        backgroundColor: "#B401FC",
        height: 3,
        alignSelf: "stretch"
    }
});

export default Underline;