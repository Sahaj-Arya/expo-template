import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SecondTab = () => {
  return (
    <View>
      <Text>SecondTab</Text>
      <Link href={"/(tabs)/(nested)"} push asChild>
        <Text>Gop to Screen1</Text>
      </Link>
    </View>
  );
};

export default SecondTab;
