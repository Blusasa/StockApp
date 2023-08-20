import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react"; 

import { useTheme, commonStyles } from "../../../theme";

import CustomTextInput from "../../../components/CustomTextInput";
import CustomBtn from "../../../components/CustomButton";

const LoginScreen = ({ navigation }) => {
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });

    const theme = useTheme();
    const componentStyles = styles(theme, containerSize.height);

    const login = () => { }

    return (
        <LinearGradient
            colors={[theme.colors.highlights, theme.colors.primary]}
            locations={[0.65, 0.95]}
            style={componentStyles.componentContainer}
            onLayout={(e) => setContainerSize(e.nativeEvent.layout)}
        >
            <View style={{flex: 1}}></View>
            <Text style={[componentStyles.text]}>STONKS</Text>
            <View style={{flex: 1}}></View>
            <View style={[componentStyles.infoContainer]}>
                <CustomTextInput placeholderText="Username" styles={{ width: 350 }} hideGradient={true}></CustomTextInput>
                <CustomTextInput placeholderText="Password" styles={{ width: 350 }} hideGradient={true}></CustomTextInput>
                <View>
                    <CustomBtn text="SUBMIT" styles={{ width: 200 }} onPress={login}></CustomBtn>
                    <Text style={[componentStyles.forgotPW]}>Forgot Password?</Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = (theme, height) => StyleSheet.create({
    text: {
        ...theme.fonts.title,
        fontSize: 70,
    },
    componentContainer : {
        flex: 1,
        ...commonStyles.flexColFullCenter,
    },
    infoContainer : {
        flex: 1,
        ...commonStyles.flexColFullCenter,
        marginBottom: height * .05,
    },
    forgotPW: {
        ...theme.fonts.regular,
        fontSize: 14,
        margin: 5,
        textAlign: "center",
        textAlignVertical: "center",
        includeFontPadding: false,
    }
});


export default LoginScreen;