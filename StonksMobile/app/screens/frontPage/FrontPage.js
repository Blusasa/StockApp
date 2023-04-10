import { LinearGradient } from "expo-linear-gradient";
import CustomBtn from "../../components/CustomButton";
import { useCallback } from "react";
import { Text, View } from "react-native";
import AppStyles from "../../globals/styles/AppStyles";
import FrontPageStyles from "./FrontPageStyles";


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

export default FrontPage;


