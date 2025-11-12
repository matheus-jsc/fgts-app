export interface Theme {
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
      inverted: string;
      titleValue: string;
    };
    input: {
      borderActive: string;
      borderDisabled: string;
    };
    icon: {
      primary: string;
      secondary: string;
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
    fonts: {
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
    },
    h0: {
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
    };
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
