import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

import SplashStyles from "../frontPage/Styles"
import AppStyles from "../../globals/styles/AppStyles";
import LoginStyles from "./LoginStyles";
import CustomTextInput from "../../components/CustomTextInput";
import CustomBtn from "../../components/CustomButton";

const LoginScreen = ({ navigation }) => {

    const login = () => { }

    return (
        <LinearGradient
            colors={['#B401FC', '#E91EAC']}
            locations={[0.65, 0.95]}
            style={LoginStyles.componentContainer}>
            
            <View style={{flex: 1, alignItems:"center"}}></View>
            <Text style={[SplashStyles.text]}>STONKS</Text>
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

export default LoginScreen;