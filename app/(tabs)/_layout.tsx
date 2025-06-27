import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

type TabBarIconProps = {
  color: string;
  size: number;
};

const HomeTabBarIcon = ({ color, size }: TabBarIconProps) => (
  <Feather name="home" color={color} size={size} />
);

const ProfileTabBarIcon = ({ color, size }: TabBarIconProps) => (
  <Feather name="user" color={color} size={size} />
);

const SettingsTabBarIcon = ({ color, size }: TabBarIconProps) => (
  <Feather name="settings" color={color} size={size} />
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#673ab7" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarBadge: 3,
          tabBarIcon: ProfileTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null,
          title: "Settings",
          tabBarIcon: SettingsTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="(nested)"
        options={{
          title: "Settings",
          tabBarIcon: SettingsTabBarIcon,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
