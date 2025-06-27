import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { DarkTheme, LightTheme } from "../constants/Colors";

type ThemeType = "light" | "dark";

interface ThemeStore {
  theme: ThemeType;
  toggleTheme: () => void;
  getPaperTheme: () => any;
  loadTheme: () => Promise<void>;
}

const THEME_KEY = "theme-preference";

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light",

  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    set({ theme: newTheme });
    AsyncStorage.setItem(THEME_KEY, newTheme);
  },

  getPaperTheme: () => (get().theme === "light" ? LightTheme : DarkTheme),

  loadTheme: async () => {
    const storedTheme = await AsyncStorage.getItem(THEME_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      set({ theme: storedTheme });
    }
  },
}));
