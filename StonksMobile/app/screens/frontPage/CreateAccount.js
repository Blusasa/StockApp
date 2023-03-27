import { LinearGradient } from "expo-linear-gradient";
import { View, Text,TextInput, Button } from "react-native";

import SplashStyles from "./Styles"
import AppStyles from "../../globals/styles/AppStyles";

const CreateAccount = () => {

    return (
        <View style={AppStyles.flexContainer}>
            <LinearGradient
                colors={['#B401FC', '#E91EAC']}
                locations={[0.65, 0.95]}
                style={SplashStyles.container}
            >
                <Text style={SplashStyles.text}>Create Account</Text>
                <TextInput
        style={{height: 40}}
        placeholder="Username"
      />

<TextInput
        style={{height: 40}}
        placeholder="email"
      />

        <TextInput
        style={{height: 40}}
        placeholder="Password"
      />

      <TextInput
        style={{height: 40}}
        placeholder="Confirm Password"
      />

      
      <Button
  title="Create Account"
  color="#54EF46"
  backgroundColor= ""
  accessibilityLabel="Create Account"
/>

            </LinearGradient>
        </View>
    );
};

export default CreateAccount;