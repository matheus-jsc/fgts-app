import React, { useState, forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { useTheme } from 'styled-components/native';
import { 
  Container, 
  Label, 
  InputContainer, 
  InputField, 
  ErrorText
} from './Input.styles';
import { InputProps } from './types';

const Input = forwardRef<RNTextInput, InputProps>(
  ({ label, error, mask, containerStyle, ...otherProps }, ref) => {
    const theme = useTheme();
    
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
      if (otherProps.onFocus) {
        otherProps.onFocus({} as any);
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
      if (otherProps.onBlur) {
        otherProps.onBlur({} as any);
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
              placeholderTextColor={theme.colors.text.disabled}
              style={{
                flex: 1,
                fontSize: theme.typography.caption.fontSize,
                color: theme.colors.text.primary,
                padding: 0,
                fontFamily: theme.typography.fonts.regular,
              }}
              {...otherProps}
            />
          ) : (
            <InputField
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholderTextColor="#9CA3AF"
              {...otherProps}
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
