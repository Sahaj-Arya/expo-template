import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const NestedLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Nested Home",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="secondStack"
        options={{
          title: "secondStack",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default NestedLayout;

const styles = StyleSheet.create({});
