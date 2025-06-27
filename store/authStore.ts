import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        setItem: async (key, value) => {
          await SecureStore.setItemAsync(key, value);
        },
        getItem: async (key) => {
          return await SecureStore.getItemAsync(key);
        },
        removeItem: async (key) => {
          await SecureStore.deleteItemAsync(key);
        },
      })),
    }
  )
);

export default useAuthStore;
