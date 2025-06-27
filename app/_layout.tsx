import useAuthStore from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";
import { Stack } from "expo-router";
import React from "react";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  ThemeBase,
} from "react-native-paper";

const ScreenLayout = () => {
  const { isLoggedIn, loadAuthState } = useAuthStore((state) => state);
  const { theme, loadTheme } = useThemeStore((state) => state);

  React.useEffect(() => {
    loadTheme();
    loadAuthState();
  }, []);

  const paperTheme: ThemeBase = theme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" options={{ title: "Tabs" }} />
          <Stack.Screen name="(screens)" options={{ title: "Home" }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="login" options={{ title: "Login" }} />
        </Stack.Protected>
      </Stack>
    </PaperProvider>
  );
};

export default ScreenLayout;
