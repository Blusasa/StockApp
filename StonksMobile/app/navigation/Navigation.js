import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function Navigation() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LaunchScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}