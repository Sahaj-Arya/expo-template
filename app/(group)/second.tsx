import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Second = () => {
  const params = useLocalSearchParams();
  console.log(params);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Second</Text>
      <Link href="/(group)/first" push asChild>
        <Button title="Go to First"></Button>
      </Link>
    </View>
  );
};

export default Second;
