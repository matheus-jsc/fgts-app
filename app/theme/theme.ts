import { Theme } from './Entities';

declare module 'styled-components' {
  export interface  DefaultTheme extends Theme {}
}

export const lightTheme: Theme = {
  colors: {
    primary: '#004bd4',
    secondary: '#3366ff',
    background: '#F7F8FA',
    surface: '#FFFFFF',
    error: '#FF3B30',
    success: '#34C759',
    text: {
      primary: '#171A1F',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
      inverted: '#FFFFFF',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 999,
  },
  typography: {
    fonts: {
      regular: 'Montserrat-Regular',
      medium: 'Montserrat-Medium',
      semiBold: 'Montserrat-SemiBold',
      bold: 'Montserrat-Bold',
    },
    h0: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold',
    },
    h1: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '700',
    },
    h2: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
      color: '#6B7280',
    },
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1E1E1E',
    text: {
      primary: '#E0E0E0',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
      inverted: '#121212',
    },
  },
};
