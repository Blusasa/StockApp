//React imports
import { useEffect, useState } from "react";

//React-Native imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";

//In app imports
import FrontPage from "../screens/frontPage/FrontPage";
import CreateAccount from "../screens/createAccountPage/CreateAccount";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import Tabs from "./TabNavigator";

//Key used for AsyncStorage
const NavKey = 'NavStateDEV';

const Navigation = () => {
    //states used for navigation state. Persists screens after code updates while in development
    const [isReady, setIsReady] = useState(process.env.NODE_ENV === "development" ? false : true);
    const [navState, setNavState] = useState(null);

    const Stack = createNativeStackNavigator();

    const screenOptions = {
        "headerShown": false
    }

    //effect will fetch nav state from storage and update app to last screen used
    useEffect(() => {
        const getNavState = async() => {
            try{
                const state = await AsyncStorage.getItem(NavKey);
                if(state){
                    setNavState(JSON.parse(state));
                } 
            } catch (error) {
                console.log("Nav state hook not working");
            } finally {
                setIsReady(true);
            }
        };

        if(!isReady){
            getNavState();
        }

    }, [isReady])

    //updates/persists navigation state everytime the state changes
    const handleNavStateChange = (state) => {
        AsyncStorage.setItem(NavKey, JSON.stringify(state));
    };

    //Don't return the app yet unless the previous state is loaded, displays a loading spinner in the meantime
    if(!isReady){
        return <ActivityIndicator color={"#E91EAC"} size={"large"}/>;
    }

    return (
        <NavigationContainer
            // initialState={navState}
            onStateChange={handleNavStateChange}
        >
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