import type { Vote } from "@/types/vote";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type MyVotesStore = {
  myVotes: Vote[];
  addVote: (vote: Vote) => void;
};

export const useMyVotesStore = create<MyVotesStore>()(
  persist(
    (set) => ({
      myVotes: [],
      addVote: (vote) =>
        set((state) => {
          const exists = state.myVotes.some(
            (vo) => vo.pollId === vote.pollId && vo.userId === vote.userId
          );

          if (exists) return state;

          return {
            myVotes: [
              ...state.myVotes,
              { pollId: vote.pollId, userId: vote.userId, value: vote.value },
            ],
          };
        }),
    }),
    {
      name: "myVotes",
      partialize: (state) => ({ myVotes: state.myVotes }),
    }
  )
);
