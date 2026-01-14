import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookmarkStore = {
  bookmark: string[];
  toggleBookmark: (id: string) => void;
};

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set) => ({
      bookmark: [],

      toggleBookmark: (id) =>
        set((state) => ({
          bookmark: state.bookmark.includes(id)
            ? state.bookmark.filter((boo) => boo !== id)
            : [...state.bookmark, id],
        })),
    }),
    {
      name: "bookmark",
      partialize: (state) => ({ bookmark: state.bookmark }),
    }
  )
);
