import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import {commonStyles, useTheme } from "../../../theme";

import CustomBtn from "../../../components/CustomButton";


const FrontPage = ({navigation}) => {
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0,
        x: 0,
        y: 0
      });

    const theme = useTheme();
    const componentStyles = styles(theme, containerSize.height);

    const directToLoginPage = useCallback(() => {
        navigation.navigate("LoginScreen");
    }, []);

    const directToCreateAccount = useCallback(() => {
        navigation.navigate("CreateAccount");
    }, []);

    return (
        <LinearGradient
            colors={[theme.colors.highlights, theme.colors.primary]}
            locations={[0.65, 0.95]}
            style={[componentStyles.mainContainer, commonStyles.devBorder]}
            onLayout={(e) => setContainerSize(e.nativeEvent.layout)}
        >
            {/* empty views are set to place the Text component roughly where I want it in each screen until I find a better way */}
            <View style={{flex: 1}}></View>
            <Text style={[componentStyles.text]}>STONKS</Text>
            <View style={{flex: 2}}></View>

            <View style={componentStyles.btnContainer}>
                <CustomBtn text={"LOGIN"} styles={{ width: 300 }} onPress={directToLoginPage} />
                <CustomBtn text={"CREATE ACCOUNT"} styles={{ width: 300 }} onPress={directToCreateAccount} />
            </View>

        </LinearGradient>
    );
};

const styles = (theme, height) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColFullCenter,
    },
    text: {
        ...theme.fonts.title,
        fontSize: 70,
    },
    btnContainer : { 
        flex: 1,
        ...commonStyles.flexColEnd, 
        marginBottom: height * 0.06, 
    }
});

export default FrontPage;


