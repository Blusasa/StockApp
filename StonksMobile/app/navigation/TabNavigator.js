import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from '../screens/homepage/HomePage';
import Groups from '../screens/frontPage/Groups';
import Profile from '../screens/frontPage/Profile';

const Tab = createBottomTabNavigator();

const Tabs= ()=> {
    return(
        
        <Tab.Navigator>
            {/* <Tab.Screen name ="HomePage" component={HomePage}/> */}
            <Tab.Screen name ="Groups" component={Groups}/>
            <Tab.Screen name ="Profile" component={Profile}/>
        </Tab.Navigator>
        
    );
}

export default Tabs;