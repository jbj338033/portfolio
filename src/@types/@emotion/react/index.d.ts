import "@emotion/react";

declare module "@emotion/react" {
  import { Theme as EmotionTheme } from "@emotion/react";

  export interface Theme extends EmotionTheme {
    mode: "light" | "dark";
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    transition: {
      fast: string;
      normal: string;
    };
    container: {
      sm: string;
      md: string;
      lg: string;
    };
    colors: {
      primary: {
        main: string;
        hover: string;
        light: string;
      };
      background: {
        default: string;
        paper: string;
        alt: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
      };
      border: {
        default: string;
        light: string;
      };
      status: {
        ongoing: string;
        completed: string;
        planned: string;
        error: string;
      };
    };
  }
}
