import styled, { DefaultTheme } from 'styled-components/native';
import { TextInput as RNTextInput } from 'react-native';
import { InputContainerProps } from './props';

interface ThemeProps {
  theme: DefaultTheme;
}

export const Container = styled.View`
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.md}px;
  width: 100%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.regular};
  font-size: ${({ theme }: ThemeProps) => theme.typography.caption.fontSize}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.caption.lineHeight}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.sm}px;
`;

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: ${({ theme }: ThemeProps) => theme.radius.md}px;
  border-color: ${({ isFocused, hasError, theme }: InputContainerProps & ThemeProps) => 
    hasError 
      ? theme.colors.error 
      : isFocused 
        ? theme.colors.primary 
        : theme.colors.text.disabled};
  background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
  padding: 0 12px;
  height: ${({ theme }: ThemeProps) => theme.spacing.xxl}px;
`;

export const InputField = styled(RNTextInput)`
  flex: 1;
  font-size: ${({ theme }: ThemeProps) => theme.typography.body.fontSize}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  padding: 12px 0;
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.regular};
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }: ThemeProps) => theme.typography.caption.fontSize - 2}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.caption.lineHeight - 2}px;
  color: ${({ theme }: ThemeProps) => theme.colors.error};
  margin-top: ${({ theme }: ThemeProps) => theme.spacing.xs / 2}px;
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.regular};
`;
