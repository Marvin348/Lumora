import type { StateCreator } from "zustand";
import type { AppStore } from "@/store";

export type ActiveUserSlice = {
  activeUserId: string | null;
  setActiveUserId: (id: string) => void;
};

export const createActiveUserSlice: StateCreator<
  AppStore,
  [],
  [],
  ActiveUserSlice
> = (set) => ({
  activeUserId: null,
  setActiveUserId: (id) => set({ activeUserId: id }),
});
