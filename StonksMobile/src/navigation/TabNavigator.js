import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Groups from "../features/grouping/screens/UserGroupsScreen";
import Profile from '../features/profile-management/screens/Profile';
import HomeScreen from "../features/home-overview/screens/HomeScreen";
import UserAssets from "../features/asset-mngmt/screens/UserAssets";
import SingleStockPage from "../features/market-info/screens/SingleStockPage";

import Ionicons from "../assets/rneIcons/Ionicons";

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
            <Tab.Screen name="Stock" component={SingleStockPage}/>
        </Tab.Navigator>

    );
}

export default Tabs;