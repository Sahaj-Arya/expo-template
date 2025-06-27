import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Screen1 = () => {
  return (
    <View>
      <Text>Screen1</Text>
      <Link href={"/secondStack"} push asChild>
        <Text>Gop to Screen2</Text>
      </Link>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
