import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, ButtonText } from './Button.styles';
import { ButtonProps } from './props';

const Button: React.FC<ButtonProps> = ({ 
  title,
  fetching = false,
  ...otherProps 
}) => {
  const theme = useTheme();
  return (
    <Container
      disabled={fetching}
      activeOpacity={0.8}
      {...otherProps}
    >
      {fetching ? (
        <ActivityIndicator color={theme.colors.text.inverted} />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </Container>
  );
};

Button.displayName = 'Button';

export default Button;
