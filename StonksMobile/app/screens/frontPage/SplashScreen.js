import { LinearGradient } from "expo-linear-gradient";
import { View, Text,TextInput, Button } from "react-native";

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
                <Text style={SplashStyles.text}>STONKS</Text>
                <TextInput
        style={{height: 40}}
        placeholder="Username"
      />

        <TextInput
        style={{height: 40}}
        placeholder="Password"
      />

      <Text>Forgot username or password</Text>
      <Button
  title="Submit"
  color="#54EF46"
  backgroundColor= ""
  accessibilityLabel="Forgot Username or Password"
/>

            </LinearGradient>
        </View>
    );
};

export default SplashScreen;