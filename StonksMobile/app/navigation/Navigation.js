import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/frontPage/SplashScreen";


function Navigation() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LaunchScreen">
                <Stack.Screen name="LaunchScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;