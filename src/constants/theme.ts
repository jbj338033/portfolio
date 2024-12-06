import { Theme } from "@emotion/react";

const commonStyles = {
  spacing: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borderRadius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  fontSize: {
    xs: "11px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    xxl: "24px",
    xxxl: "28px",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  transition: {
    fast: "all 0.2s ease",
    normal: "all 0.3s ease",
  },
  container: {
    sm: "800px",
    md: "1000px",
    lg: "1200px",
  },
};

export const lightTheme: Theme = {
  ...commonStyles,
  mode: "light",
  colors: {
    primary: {
      main: "#94d82d",
      hover: "#82c91e",
      light: "rgba(148, 216, 45, 0.1)",
    },
    background: {
      default: "#fff",
      paper: "#f8f9fa",
      alt: "#f1f3f5",
    },
    text: {
      primary: "#222",
      secondary: "#666",
      tertiary: "#999",
      inverse: "#fff",
    },
    border: {
      default: "#eee",
      light: "rgba(0, 0, 0, 0.1)",
    },
    status: {
      ongoing: "#2b7489",
      completed: "#666",
      planned: "#60A5FA",
      error: "#DC2626",
    },
  },
};

export const darkTheme: Theme = {
  ...commonStyles,
  mode: "dark",
  colors: {
    primary: {
      main: "#94d82d",
      hover: "#82c91e",
      light: "rgba(148, 216, 45, 0.1)",
    },
    background: {
      default: "#1a1b1e",
      paper: "rgba(255, 255, 255, 0.05)",
      alt: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.8)",
      tertiary: "rgba(255, 255, 255, 0.5)",
      inverse: "#222",
    },
    border: {
      default: "rgba(255, 255, 255, 0.1)",
      light: "rgba(255, 255, 255, 0.2)",
    },
    status: {
      ongoing: "#34D399",
      completed: "#9CA3AF",
      planned: "#60A5FA",
      error: "#DC2626",
    },
  },
};

export const THEMES: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
