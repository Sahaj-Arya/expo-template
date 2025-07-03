import useAuthStore from "@/store/authStore";
import { Button, Text, View } from "react-native";

const OnboardingScreen = () => {
  const completeOnboarding = useAuthStore((state) => state.completeOnboarding);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>👋 Welcome to the app!</Text>
      <Button title="Continue" onPress={completeOnboarding} />
    </View>
  );
};

export default OnboardingScreen;
