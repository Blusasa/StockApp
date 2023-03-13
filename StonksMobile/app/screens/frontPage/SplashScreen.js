import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

import CustomTextInput from "../../components/CustomTextInput";

import SplashStyles from "./Styles"
import AppStyles from "../../globals/styles/AppStyles";

const SplashScreen = () => {

    return (
        <View style={AppStyles.flexContainer}>
            <LinearGradient
                colors={['#B401FC', '#E91EAC']}
                locations={[0.65, 0.95]}
                style={SplashStyles.container}
            >
                <Text style={[SplashStyles.text, AppStyles.text]}>STONKS</Text>
            </LinearGradient>

            <CustomTextInput placeholderText="Username" styles={SplashStyles.textInput}/>
            <CustomTextInput placeholderText="Password" />
        </View>
    );
};

export default SplashScreen;