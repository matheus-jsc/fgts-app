import { ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightContent?: React.ReactNode;
  style?: ViewStyle;
  onBackPress?: () => void;
}
