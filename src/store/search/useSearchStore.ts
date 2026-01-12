import { create } from "zustand";

type SearchStore = {
  searchQuery: string;
  setSearchQuery: (input: string) => void;
};

export const useSearchStore = create<SearchStore>()((set) => ({
  searchQuery: "",
  setSearchQuery: (input) => set({ searchQuery: input }),
}));
