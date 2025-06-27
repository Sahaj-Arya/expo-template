import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const AUTH_KEY = "auth-store:isLoggedIn";

type AuthStore = {
  isLoggedIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  loadAuthState: () => Promise<void>;
};

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,

  login: async () => {
    await AsyncStorage.setItem(AUTH_KEY, "true");
    set({ isLoggedIn: true });
  },

  logout: async () => {
    await AsyncStorage.setItem(AUTH_KEY, "false");
    set({ isLoggedIn: false });
  },

  loadAuthState: async () => {
    const stored = await AsyncStorage.getItem(AUTH_KEY);
    set({ isLoggedIn: stored === "true" });
  },
}));

export default useAuthStore;
