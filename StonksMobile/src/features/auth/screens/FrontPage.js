import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";

import CustomBtn from "../../../components/CustomButton";
import AppStyles from "../../../theme/AppStyles";


const FrontPage = ({ navigation }) => {

    const directToLoginPage = useCallback(() => {
        navigation.navigate("LoginScreen");
    });

    const directToCreateAccount = useCallback(() => {
        navigation.navigate("CreateAccount");
    });

    return (
        <LinearGradient
            colors={['#B401FC', '#E91EAC']}
            locations={[0.65, 0.95]}
            style={AppStyles.flexContainer}
        >
            <View style={AppStyles.flexContainer}></View>
            <Text style={[AppStyles.textSemiBold, FrontPageStyles.text]}>STONKS</Text>
            <View style={AppStyles.flexContainer}></View>

            <View style={FrontPageStyles.btnContainer}>
                <CustomBtn text={"LOGIN"} styles={{ width: 300 }} onPress={directToLoginPage} />
                <CustomBtn text={"CREATE ACCOUNT"} styles={{ width: 300 }} onPress={directToCreateAccount} />
            </View>

        </LinearGradient>
    );
};

const FrontPageStyles = StyleSheet.create({
    text: {
        fontSize: 70,
        textShadowColor: "#000000",
        textShadowOffset: { width: 5, height: 5},
        elevation: 5
    },
    btnContainer : { 
        flex: 1, 
        justifyContent: "flex-end", 
        marginBottom: 50 
    }
});

export default FrontPage;


