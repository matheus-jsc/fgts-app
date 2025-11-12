import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { lightTheme } from './app/theme/theme';
import { AppNavigator } from './app/navigation/AppNavigator';
import { AppProvider } from './app/features/Home/contexts/AppContext';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={lightTheme.colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <AppProvider>
          <StatusBar style="dark" />
          <AppNavigator />
        </AppProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
