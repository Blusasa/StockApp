import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FrontPage from "../screens/frontPage/FrontPage";
import CreateAccount from "../screens/createAccountPage/CreateAccount";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import Tabs from "./TabNavigator";

function Navigation() {

    const Stack = createNativeStackNavigator();

    const screenOptions = {
        "headerShown": false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FrontPage">
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={screenOptions}/>
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={screenOptions}/>
                <Stack.Screen name="FrontPage" component={FrontPage} options={screenOptions}/>
                <Stack.Screen name="MainAppPages" component={Tabs} options={screenOptions}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;