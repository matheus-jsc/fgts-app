import styled, { DefaultTheme } from 'styled-components/native';

interface ThemeProps {
  theme: DefaultTheme;
}

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.colors.background};
`;

export const Container = styled.View`
  padding-top: ${({ theme }: ThemeProps) => theme.spacing.xxl * 1.5}px;
  padding-horizontal: ${({ theme }: ThemeProps) => theme.spacing.md}px;
  padding-bottom: ${({ theme }: ThemeProps) => theme.spacing.lg}px;
  width: 100%;
  justify-content: center;
`;

export const Header = styled.View`
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.xl}px;
  align-items: center;
  padding: ${({ theme }: ThemeProps) => theme.spacing.lg}px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.bold};
  font-size: ${({ theme }: ThemeProps) => theme.typography.h0.fontSize}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.h0.lineHeight}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.inverted};
  text-align: center;
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.sm}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.regular};
  font-size: ${({ theme }: ThemeProps) => theme.typography.caption.fontSize}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.caption.lineHeight}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.inverted};
  text-align: center;
  padding-horizontal: ${({ theme }: ThemeProps) => theme.spacing.md}px;
`;

export const Form = styled.View`
  flex: 1;
  border-radius: ${({ theme }: ThemeProps) => theme.radius.md}px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
  padding: ${({ theme }: ThemeProps) => theme.spacing.lg}px;
  margin-horizontal: ${({ theme }: ThemeProps) => theme.spacing.sm}px;
  margin-top: -${({ theme }: ThemeProps) => theme.spacing.xl}px;
`;

export const FormGroup = styled.View`
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.md}px;
`;

export const ButtonContainer = styled.View`
  margin-top: ${({ theme }: ThemeProps) => theme.spacing.lg}px;
`;
