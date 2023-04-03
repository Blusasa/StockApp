import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/frontPage/SplashScreen';
import HomePage from '../screens/frontPage/HomePage';
import CreateAccount from '../screens/frontPage/CreateAccount';
import FirstPage from '../screens/frontPage/FirstPage';
import Groups from '../screens/frontPage/Groups';
import Profile from '../screens/frontPage/Profile';
const Tab = createBottomTabNavigator();

const Tabs= ()=> {
    return(
        
        <Tab.Navigator>
            {/*<Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Login" component={LoginScreen}/>
            */}
            <Tab.Screen name= "Splash" component={SplashScreen}/>
            <Tab.Screen name ="HomePage" component={HomePage}/>
            <Tab.Screen name ="Create Account" component={CreateAccount}/>
            <Tab.Screen name ="First Page" component={FirstPage}/>
            <Tab.Screen name ="Groups" component={Groups}/>
            <Tab.Screen name ="Profile" component={Profile}/>
        </Tab.Navigator>
        
    );
}

export default Tabs;