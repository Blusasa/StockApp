import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/frontPage/SplashScreen";
import CreateAccount from "../screens/frontPage/CreateAccount";
import LoginScreen from "../screens/frontPage/LoginScreen";
import Tabs from "../components/TabNavigator";
import HomePage from "../screens/homepage/HomePage";

function Navigation() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Homepage">
               <Stack.Screen name ="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name ="CreateAcoount" component={CreateAccount}/>
                <Stack.Screen name="LaunchScreen" component={SplashScreen} />
              <Stack.Screen name ="Homepage" component={HomePage}/>
                <Stack.Screen name ="Login" component={Tabs}/>

            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;