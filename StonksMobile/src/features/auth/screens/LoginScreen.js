import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";

import AppStyles from "../../../theme/AppStyles";

import CustomTextInput from "../../../components/CustomTextInput";
import CustomBtn from "../../../components/CustomButton";

const LoginScreen = ({ navigation }) => {

    const login = () => { }

    return (
        <LinearGradient
            colors={['#B401FC', '#E91EAC']}
            locations={[0.65, 0.95]}
            style={LoginStyles.componentContainer}>
            
            <View style={{flex: 1, alignItems:"center"}}></View>
            <Text style={[LoginStyles.text, AppStyles.textSemiBold]}>STONKS</Text>
            <View style={{flex: 1, alignItems:"center"}}></View>
            <View style={[LoginStyles.infoContainer]}>
                <CustomTextInput placeholderText="Username" styles={{ width: 350 }} hideGradient={true}></CustomTextInput>
                <CustomTextInput placeholderText="Password" styles={{ width: 350 }} hideGradient={true}></CustomTextInput>
                <CustomBtn text="SUBMIT" styles={{ width: 200 }} onPress={login}></CustomBtn>
                <Text style={[AppStyles.text, { fontSize: 14, margin: 5 }]}>Forgot Password?</Text>
            </View>
        </LinearGradient>
    );
};

const LoginStyles = StyleSheet.create({
    text: {
        fontSize: 70,
        textShadowColor: "#000000",
        textShadowOffset: { width: 5, height: 5},
        elevation: 5
    },
    componentContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    infoContainer : {
        flexShrink: 1,
        marginBottom: 20,
        justifyContent: "flex-end",
        alignItems: "center",
    }
});


export default LoginScreen;