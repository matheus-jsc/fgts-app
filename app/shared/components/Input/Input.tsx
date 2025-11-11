import React, { useState, forwardRef } from 'react';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { 
  Container, 
  Label, 
  InputContainer, 
  InputField, 
  ErrorText 
} from './Input.styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  mask?: (string | RegExp)[];
  containerStyle?: object;
}

const Input = forwardRef<RNTextInput, InputProps>(
  ({ label, error, mask, containerStyle, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
      if (rest.onFocus) {
        rest.onFocus({} as any);
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
      if (rest.onBlur) {
        rest.onBlur({} as any);
      }
    };

    return (
      <Container style={containerStyle}>
        {label && <Label>{label}</Label>}
        <InputContainer 
          isFocused={isFocused}
          hasError={!!error}
        >
          {mask ? (
            <MaskInput
              ref={ref as any}
              mask={mask}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholderTextColor="#9CA3AF"
              style={{
                flex: 1,
                fontSize: 16,
                color: '#111827',
                padding: 12,
                fontFamily: 'Inter-Regular',
              }}
              {...rest}
            />
          ) : (
            <InputField
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholderTextColor="#9CA3AF"
              {...rest}
            />
          )}
        </InputContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;
