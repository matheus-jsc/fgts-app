import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

export const HomeScreen = () => {
  const theme = useTheme();
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md
    }}>
      <Text>Home</Text>
    </View>
  );
};
