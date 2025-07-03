import useAuthStore from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  ThemeBase,
} from "react-native-paper";

SplashScreen.preventAutoHideAsync();

const ScreenLayout = () => {
  const { isLoggedIn, loadAuthState, loadOnboarding, hasCompletedOnboarding } =
    useAuthStore((state) => state);
  const { theme, loadTheme } = useThemeStore((state) => state);

  React.useEffect(() => {
    const loadInitialData = async () => {
      await loadTheme();
      await loadOnboarding();
      await loadAuthState();
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    };

    loadInitialData();
  }, [loadTheme, loadOnboarding, loadAuthState]);

  const paperTheme: ThemeBase = theme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" options={{ title: "Tabs" }} />
          <Stack.Screen name="(screens)" options={{ title: "Home" }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
          <Stack.Screen name="login" options={{ title: "Login" }} />
        </Stack.Protected>

        <Stack.Protected guard={!hasCompletedOnboarding}>
          <Stack.Screen name="(onboarding)" options={{ title: "Onboarding" }} />
        </Stack.Protected>
      </Stack>
    </PaperProvider>
  );
};

export default ScreenLayout;
