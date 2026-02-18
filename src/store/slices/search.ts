import type { StateCreator } from "zustand";
import type { AppStore } from "@/store";

export type SearchSlice = {
  searchQuery: string;
  setSearchQuery: (input: string) => void;
};

// export const useSearchStore = create<SearchStore>()((set) => ({
//   searchQuery: "",
//   setSearchQuery: (input) => set({ searchQuery: input }),
// }));

export const createSearchSlice: StateCreator<AppStore, [], [], SearchSlice> = (
  set,
) => ({
  searchQuery: "",
  setSearchQuery: (input) => set({ searchQuery: input }),
});
