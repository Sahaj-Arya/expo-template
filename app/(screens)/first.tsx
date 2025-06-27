import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Landing = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link
        href={{ pathname: "/second", params: { name: "a", data: "r" } }}
        push
        asChild
      >
        <Button title="Go to Second" />
      </Link>
      <Text>Landing</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
