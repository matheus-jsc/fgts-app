import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import das telas
import { HomeScreen } from '../features/Home/containers/HomeScreen';
import { ResultScreen } from '../features/Result/containers/ResultScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F7F8FA' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={{
            title: 'Resultado',
            presentation: 'card',
            gestureEnabled: true,
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: '',
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackButtonMenuEnabled: false

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
