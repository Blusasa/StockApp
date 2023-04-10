import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Groups from '../screens/userGroupsPage/UserGroupsScreen';
import Profile from '../screens/profilePage/Profile';
import HomeScreen from '../screens/homePage/HomeScreen';

import Ionicons from '../assets/rneIcons/Ionicons';
import UserAssets from '../screens/userAssetsPage/UserAssets';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const tabScreenOptions = {
        "headerShown": false,
        "tabBarHideOnKeyboard": true,
        "tabBarStyle": {
            "backgroundColor": "#B401FC"
        },
        "tabBarLabelPosition": "below-icon"
    }

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarLabelPosition: "below-icon",
                tabBarActiveBackgroundColor: "white",
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "white",
                tabBarInactiveBackgroundColor: "#B401FC",
                tabBarIcon: ({focused}) => {
                    let iconName;

                    switch(route.name){
                        case "Home":
                            iconName = focused ? "home-outline" : "home";
                            break;
                        case "Assets":
                            iconName = focused ? "bar-chart-outline" : "bar-chart";
                            break;
                        case "Groups":
                            iconName = focused ? "people-outline" : "people";
                            break;
                        case "Profile":
                            iconName = focused ? "md-settings-outline" : "md-settings";
                            break;
                    }

                    return <Ionicons name={iconName}/>
                },
            })}

        >
            
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Assets" component={UserAssets}/>
            <Tab.Screen name="Groups" component={Groups} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    );
}

export default Tabs;