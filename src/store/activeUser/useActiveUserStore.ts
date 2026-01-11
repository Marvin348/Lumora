import { create } from "zustand";
import { persist } from "zustand/middleware";

type ActiveUserStore = {
  activeUserId: string | null;
  setActiveUserId: (id: string) => void;
};

export const useActiveUserStore = create<ActiveUserStore>()(
  persist(
    (set) => ({
      activeUserId: null,
      setActiveUserId: (id) => set({ activeUserId: id }),
    }),
    {
      name: "activeUserId",
      partialize: (state) => ({ activeUserId: state.activeUserId }),
    }
  )
);
