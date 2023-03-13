import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/frontPage/SplashScreen";
import CreateAccount from "../screens/frontPage/CreateAccount";
import LoginScreen from "../screens/frontPage/LoginScreen";


function Navigation() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LaunchScreen">
                <Stack.Screen name ="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name ="CreateAcoount" component={CreateAccount}/>
                <Stack.Screen name="LaunchScreen" component={SplashScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;