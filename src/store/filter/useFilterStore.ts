import type { PollType } from "@/types/pollType";
import { create } from "zustand";

export type Filter = {
  category?: PollType;
};

type FilterStore = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearFilter: () => void;
};

export const useFilterStore = create<FilterStore>()((set) => ({
  filter: {},
  setFilter: (filter) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  clearFilter: () => set({ filter: {} }),
}));
