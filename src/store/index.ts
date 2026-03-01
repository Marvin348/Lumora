import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createActiveUserSlice,
  type ActiveUserSlice,
} from "@/store/slices/activeUser";
import {
  createBookmarkSlice,
  type BookmarkSlice,
} from "@/store/slices/bookmark";
import { createFilterSlice, type FilterSlice } from "@/store/slices/filter";
import { createVotesSlice, type VotesSlice } from "@/store/slices/votes";
import { createPollsSlice, type PollSlice } from "@/store/slices/polls";
import { createSearchSlice, type SearchSlice } from "@/store/slices/search";

export type AppStore = ActiveUserSlice &
  BookmarkSlice &
  FilterSlice &
  VotesSlice &
  PollSlice &
  SearchSlice;

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      // user / identity
      ...createActiveUserSlice(...a),

      // domain data
      ...createBookmarkSlice(...a),
      ...createVotesSlice(...a),
      ...createPollsSlice(...a),

      // ui / filters / search
      ...createFilterSlice(...a),
      ...createSearchSlice(...a),
    }),
    {
      name: "AppStore",
      partialize: (state) => ({
        activeUserId: state.activeUserId,
        bookmark: state.bookmark,
        votes: state.votes,
        polls: state.polls,
      }),
    },
  ),
);
