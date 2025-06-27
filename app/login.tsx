import useAuthStore from "@/store/authStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  const { login } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>

      <Text onPress={login} style={{ color: "blue", marginTop: 20 }}>
        Sign in
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
