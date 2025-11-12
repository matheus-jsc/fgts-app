import styled from 'styled-components/native';
import { TouchableOpacity, Text, View } from 'react-native';
import { DefaultTheme } from 'styled-components';

interface ButtonProps {
  isSelected?: boolean;
}

interface ThemeProps {
  theme: DefaultTheme;
}

export const Container = styled(View)`
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.md}px;
  width: 100%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.regular};
  font-size: ${({ theme }: ThemeProps) => theme.typography.caption.fontSize}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing.sm}px;
`;

export const Button = styled(TouchableOpacity)`
  height: ${({ theme }: ThemeProps) => theme.spacing.xxl}px;
  border-radius: ${({ theme }: ThemeProps) => theme.radius.md}px;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.text.disabled};
  padding: 0 12px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
  gap: ${({ theme }: ThemeProps) => theme.spacing.sm}px;
`;

export const ButtonText = styled(Text)`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.regular};
  font-size: ${({ theme }: ThemeProps) => theme.typography.body.fontSize}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  flex: 1;
`;

export const IconContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }: ThemeProps) => theme.colors.text.primary}80;
`;

export const ModalContent = styled(View)`
  background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
  border-top-left-radius: ${({ theme }: ThemeProps) => theme.radius.lg}px;
  border-top-right-radius: ${({ theme }: ThemeProps) => theme.radius.lg}px;
  padding: ${({ theme }: ThemeProps) => theme.spacing.lg}px;
  max-height: 70%;
  height: 350px;
  width: 100%;
`;

export const ModalHeader = styled(View)`
  flex-direction: row;
  justify-content: center;
  height: ${({ theme }: ThemeProps) => theme.spacing.xxl * 1.25}px;
  align-items: center;
`;

export const ModalTitle = styled(Text)`
  font-size: ${({ theme }: ThemeProps) => theme.typography.h2.fontSize}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.h2.lineHeight}px;
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.semiBold};
`;

export const MonthButton = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  min-width: 20%;
  margin: ${({ theme }: ThemeProps) => theme.spacing.xs}px;
  height: ${({ theme }: ThemeProps) => theme.spacing.xxl * 1.25}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }: ThemeProps) => theme.radius.md}px;
  background-color: ${({ theme, isSelected }: ButtonProps & ThemeProps) => 
    isSelected ? theme.colors.primary : `${theme.colors.primary}10`};
`;

export const MonthText = styled(Text)<ButtonProps>`
  font-size: ${({ theme }: ThemeProps) => theme.typography.caption.fontSize}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.caption.lineHeight}px;
  color: ${({ theme, isSelected }: ButtonProps & ThemeProps) => 
    isSelected ? theme.colors.surface : theme.colors.text.primary};
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.semiBold};
  text-align: center;
`;

export const MonthsGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px 0;
`;

export const DragHandle = styled(View)`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.text.secondary};
  opacity: 0.3;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const YearText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 16px;
  font-family: 'Inter-SemiBold';
`;
