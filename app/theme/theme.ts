import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      error: string;
      success: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    radius: {
      sm: number;
      md: number;
      lg: number;
      full: number;
    };
    typography: {
      h1: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
      };
      h2: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
      };
      body: {
        fontSize: number;
        lineHeight: number;
      };
      caption: {
        fontSize: number;
        lineHeight: number;
        color: string;
      };
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#356DF3',
    secondary: '#5B8AFF',
    background: '#F7F8FA',
    surface: '#FFFFFF',
    error: '#FF3B30',
    success: '#34C759',
    text: {
      primary: '#171A1F',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
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

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1E1E1E',
    text: {
      primary: '#E0E0E0',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
    },
  },
};
