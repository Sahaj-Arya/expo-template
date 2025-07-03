import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const AUTH_KEY = "auth-store:isLoggedIn";
const ONBOARD_KEY = "auth-store:hasCompletredOnboarding";

type AuthStore = {
  isLoggedIn: boolean;
  hasCompletedOnboarding: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  loadAuthState: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
  resetOnboarding: () => Promise<void>;
  loadOnboarding: () => Promise<void>;
};

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  hasCompletedOnboarding: false,
  login: async () => {
    await AsyncStorage.setItem(AUTH_KEY, "true");
    set({ isLoggedIn: true });
  },

  logout: async () => {
    await AsyncStorage.setItem(AUTH_KEY, "false");
    set({ isLoggedIn: false });
  },

  resetOnboarding: async () => {
    await AsyncStorage.setItem(ONBOARD_KEY, "false");
    set({ hasCompletedOnboarding: false });
  },
  completeOnboarding: async () => {
    await AsyncStorage.setItem(ONBOARD_KEY, "true");
    set({ hasCompletedOnboarding: true });
  },

  loadAuthState: async () => {
    const stored = await AsyncStorage.getItem(AUTH_KEY);
    set({ isLoggedIn: stored === "true" });
  },

  loadOnboarding: async () => {
    const stored = await AsyncStorage.getItem(ONBOARD_KEY);
    set({ hasCompletedOnboarding: stored === "true" });
  },
}));

export default useAuthStore;
