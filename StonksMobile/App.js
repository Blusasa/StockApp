import React from 'react';
import { useEffect } from 'react';

import { View } from 'react-native';
import { useFonts, Poppins_300Light_Italic, Poppins_400Regular } from '@expo-google-fonts/poppins';

import AppStyles from './app/globals/styles/AppStyles';
import Navigation from './app/navigation/Navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light_Italic,
    Poppins_400Regular,
  });

  useEffect(() => {}, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={AppStyles.flexContainer}>
      <Navigation/>
     
    </View>
  );
}
