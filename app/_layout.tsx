import useAuthStore from "@/store/authStore";
import { Stack } from "expo-router";

const ScreenLayout = () => {
  const { isLoggedIn } = useAuthStore((state) => state);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ title: "Tabs" }} />
        <Stack.Screen name="(group)" options={{ title: "Home" }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ title: "Login" }} />
      </Stack.Protected>
    </Stack>
  );
};

export default ScreenLayout;
