import { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_300Light_Italic, Poppins_400Regular } from '@expo-google-fonts/poppins';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light_Italic,
    Poppins_400Regular,
  });

  useEffect(() => {

  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#B401FC', '#E91EAC']}
        locations={[0.65, 0.95]}
        style={{flex: 1, width: "100%", justifyContent: 'center', alignItems: 'center'}}
        >
        <Text style={styles.text}>Stonks</Text>
        {/* <StatusBar style="auto" /> */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '48px',
    color: '#ffffff',
  }
});
