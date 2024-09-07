import { create } from "zustand";

export interface DarkModeStore {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));