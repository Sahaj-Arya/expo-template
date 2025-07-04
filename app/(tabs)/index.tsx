import useAuthStore from "@/store/authStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { logout } = useAuthStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Text onPress={logout} style={{ color: "blue", marginTop: 20 }}>
        Logout
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
