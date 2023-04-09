import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/frontPage/SplashScreen";
import CreateAccount from "../screens/frontPage/CreateAccount";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import Tabs from "./TabNavigator";

function Navigation() {

    const Stack = createNativeStackNavigator();

    const screenOptions = {
        "headerShown": false
    }


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={screenOptions}/>
                <Stack.Screen name="CreateAcoount" component={CreateAccount} />
                <Stack.Screen name="LaunchScreen" component={SplashScreen} />
                <Stack.Screen name="MainAppPage" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;