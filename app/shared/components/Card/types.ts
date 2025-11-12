import { ViewStyle } from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'filled';
  onPress?: () => void;
}
