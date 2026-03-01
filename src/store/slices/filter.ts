import type { StateCreator } from "zustand";
import type { AppStore } from "@/store";
import type { PollType } from "@/types/pollType";

export type Filter = {
  category?: PollType;
};

export type FilterSlice = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearFilter: () => void;
};

export const createFilterSlice: StateCreator<AppStore, [], [], FilterSlice> = (
  set,
) => ({
  filter: {},

  setFilter: (filter) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),

  clearFilter: () => set({ filter: {} }),
});
