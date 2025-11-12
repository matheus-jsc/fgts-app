import { TouchableOpacityProps, ViewStyle } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}
