import { StyleSheet, View } from "react-native";

const Underline = () => {

    return (
        <View style={UnderlineStyle.underline}/>
    );
};

const UnderlineStyle = StyleSheet.create({
    underline: {
        borderColor: "#B401FC",
        borderBottomWidth: 3,
    }
});

export default Underline;