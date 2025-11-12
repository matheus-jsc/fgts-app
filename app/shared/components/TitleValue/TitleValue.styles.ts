import styled from 'styled-components/native';
import { StyledTitleTextProps } from './types';
import { Theme } from 'app/theme/entities';

interface ThemeProps {
  theme: Theme;
}

export const TitleText = styled.Text<StyledTitleTextProps>`
  color: ${({ theme, color }: { theme: Theme; color?: string }) => color || theme.colors.primary};
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.bold};
  font-size: ${({ theme }: ThemeProps) => theme.typography.h0.fontSize}px;
  line-height: ${({ theme }: ThemeProps) => theme.typography.h0.lineHeight}px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fonts.bold};
`;

