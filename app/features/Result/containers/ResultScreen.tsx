import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export const ResultScreen = ({ route }: Props) => {
  const theme = useTheme();
  // const { amount, birthDate, hasBirthdayThisYear } = route.params;
  
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md
    }}>
      <Text style={{ 
        color: theme.colors.text.primary,
        fontSize: theme.typography.h1.fontSize,
        marginBottom: theme.spacing.md
      }}>
        Resultado
      </Text>
    </View>
  );
};
