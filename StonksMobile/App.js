import React from 'react';
import { useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { useFonts, Poppins_300Light_Italic, Poppins_400Regular } from '@expo-google-fonts/poppins';

import SplashScreen from './app/screens/frontPage/SplashScreen';
import AppStyles from './app/globals/styles/AppStyles';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light_Italic,
    Poppins_400Regular,
  });

  useEffect(() => {

  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={AppStyles.flexContainer}>
      <SplashScreen/>
    </View>
  );
}
