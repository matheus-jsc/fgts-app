import { TextInputProps } from 'react-native';
import { Mask } from 'react-native-mask-input';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  mask?: Mask;
  containerStyle?: any;
}
