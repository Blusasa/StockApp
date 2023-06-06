import React from 'react';
import { useEffect } from 'react';

import {
  useFonts, Poppins_300Light_Italic,
  Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

import Navigation from './app/navigation/MainAppNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  useEffect(() => { }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={"light-content"}
        />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
