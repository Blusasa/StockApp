import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/frontPage/SplashScreen';
import HomePage from '../screens/frontPage/HomePage';

const Tab = createBottomTabNavigator();

const Tabs= ()=> {
    return(
        
        <Tab.Navigator>
            {/*<Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Login" component={LoginScreen}/>
            */}
            <Tab.Screen name= "Splash" component={SplashScreen}/>
            <Tab.Screen name ="HomePage" component={HomePage}/>
        </Tab.Navigator>
        
    );
}

export default Tabs;