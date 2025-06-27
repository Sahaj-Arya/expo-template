import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";

export const LightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#007bff",
    background: "#ffffff",
    surface: "#ffffff",
    onBackground: "#000000",
    onSurface: "#000000",
  },
};

export const DarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#0a84ff",
    background: "#121212",
    surface: "#1e1e1e",
    onBackground: "#ffffff",
    onSurface: "#ffffff",
  },
};
