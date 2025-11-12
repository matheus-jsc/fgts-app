import styled, { DefaultTheme } from 'styled-components/native';

interface ThemeProps {
  theme: DefaultTheme;
}

const Container = styled.TouchableOpacity`
  height: ${({ theme }: ThemeProps) => theme.spacing.xxl * 1.17}px;
  border-radius: ${({ theme }: ThemeProps) => theme.radius.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  padding: 0 ${({ theme }: ThemeProps) => theme.spacing.lg}px;
  min-width: 200px;
`;

const ButtonText = styled.Text`
  font-size: ${({ theme }: ThemeProps) => theme.typography.body.fontSize}px;
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.semiBold};
  color: ${({ theme }: ThemeProps) => theme.colors.text.inverted};
  text-align: center;
`;

export { Container, ButtonText };
