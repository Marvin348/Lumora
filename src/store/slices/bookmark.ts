import type { StateCreator } from "zustand";
import type { AppStore } from "@/store";

export type BookmarkSlice = {
  bookmark: string[];
  toggleBookmark: (id: string) => void;
};

export const createBookmarkSlice: StateCreator<
  AppStore,
  [],
  [],
  BookmarkSlice
> = (set) => ({
  bookmark: [],

  toggleBookmark: (id) =>
    set((state) => ({
      bookmark: state.bookmark.includes(id)
        ? state.bookmark.filter((boo) => boo !== id)
        : [...state.bookmark, id],
    })),
});
