import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { lightTheme } from './app/theme/theme';
import { AppNavigator } from './app/navigation/AppNavigator';

export default function App() {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <StatusBar style="dark" />
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
