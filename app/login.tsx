import useAuthStore from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

const Login = () => {
  const { login } = useAuthStore();
  const { colors } = useTheme();

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="headlineMedium" style={{ color: colors.onBackground }}>
        Login
      </Text>

      <Button
        mode="contained"
        onPress={login}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        Sign In
      </Button>

      <Button
        mode="text"
        onPress={toggleTheme}
        style={styles.themeButton}
        textColor={colors.primary}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 24,
    width: "60%",
    borderRadius: 8,
  },
  themeButton: {
    marginTop: 12,
  },
});
