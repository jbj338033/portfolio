import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme-storage",
    }
  )
);
