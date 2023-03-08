import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const SplashScreen = () => {

    return (
        <View>
            <LinearGradient
                colors={['#B401FC', '#E91EAC']}
                locations={[0.65, 0.95]}
                style={{ flex: 1, width: "100%", justifyContent: 'center', alignItems: 'center' }}
            >
                <Text>STONKS</Text>

                <Text>This is the text</Text>
            </LinearGradient>
        </View>
    );
};

export default SplashScreen;