import { create } from "zustand";

export interface SearchItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
}

interface SidebarState {
  openMenus: string[];
  isMobileMenuOpen: boolean;
  searchTerm: string;
  suggestions: SearchItem[];
  setOpenMenus: (menus: string[]) => void;
  toggleMenu: (id: string) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setSearchTerm: (term: string) => void;
  setSuggestions: (suggestions: SearchItem[]) => void;
  clearSearch: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  openMenus: [],
  isMobileMenuOpen: false,
  searchTerm: "",
  suggestions: [],
  setOpenMenus: (menus) => set({ openMenus: menus }),
  toggleMenu: (id) =>
    set((state) => ({
      openMenus: state.openMenus.includes(id)
        ? state.openMenus.filter((menuId) => menuId !== id)
        : [...state.openMenus, id],
    })),
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSuggestions: (suggestions) => set({ suggestions }),
  clearSearch: () => set({ searchTerm: "", suggestions: [] }),
}));
