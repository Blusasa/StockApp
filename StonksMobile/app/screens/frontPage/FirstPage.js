import AppStyles from "../../globals/styles/AppStyles";
import { View, Text,TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SplashStyles from "./Styles"
const FirstPage = () => {
  return (
    <View style={AppStyles.flexContainer}>
      <LinearGradient
        colors={["#B401FC", "#E91EAC"]}
        locations={[0.65, 0.95]}
        style={SplashStyles.container}
      >
        <Button
          title="Login"
          color="black"
          backgroundColor=""
          accessibilityLabel="Login"
        />
        <Button
          title="Create Account"
          color="#54EF46"
          backgroundColor=""
          accessibilityLabel="Create Account"
        />
      </LinearGradient>
    </View>
  );
};

export default FirstPage;
