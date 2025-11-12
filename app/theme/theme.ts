import { Theme } from './entities';

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
      titleValue: '#004bd4'
    },
    input: {
      borderActive: '#004bd4',
      borderDisabled: '#9CA3AF'
    },
    icon: {
      primary: '#FFFFFF',
      secondary: '#9CA3AF'
    }
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
    background: '#0F1115',
    surface: '#1E1E1E',
    primary: '#181818',
    secondary: '#26457bff',
    text: {
      primary: '#E0E0E0',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
      inverted: '#E0E0E0',
      titleValue: '#26457bff',
    },
    input: {
      borderActive: '#26457bff',
      borderDisabled: '#9CA3AF'
    },
    icon: {
      primary: '#9CA3AF',
      secondary: '#9CA3AF'
    }
  },
};
