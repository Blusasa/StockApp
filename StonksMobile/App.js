import React from 'react';
import { useEffect } from 'react';

import { View } from 'react-native';
import { useFonts, Poppins_300Light_Italic, 
  Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStyles from './app/globals/styles/AppStyles';
import Navigation from './app/navigation/MainAppNavigation';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  useEffect(() => {}, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{flex: 1}}>
      <Navigation/>
    </View>
  );
}
