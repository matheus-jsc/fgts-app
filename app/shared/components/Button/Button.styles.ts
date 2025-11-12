import styled, { DefaultTheme } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

interface ThemeProps {
  theme: DefaultTheme;
}

const Container = styled(TouchableOpacity)`
  height: ${(props: ThemeProps) => props.theme.spacing.xxl * 1.17}px;
  border-radius: ${(props: ThemeProps) => props.theme.radius.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
  padding: 0 ${(props: ThemeProps) => props.theme.spacing.lg}px;
  min-width: 200px;
`;

const ButtonText = styled(Text)`
  font-size: ${(props: ThemeProps) => props.theme.typography.body.fontSize}px;
  font-family: ${(props: ThemeProps) => props.theme.typography.fonts.semiBold};
  color: ${(props: ThemeProps) => props.theme.colors.text.inverted};
  text-align: center;
`;

export { Container, ButtonText };
