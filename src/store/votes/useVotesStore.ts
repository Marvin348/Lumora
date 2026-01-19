import { mockVotes } from "@/data/mockVotes";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Vote } from "@/types/vote";

type VotesStore = {
  votes: Vote[];
  addVote: (vote: Vote) => void;
};

export const useVotesStore = create<VotesStore>()(
  persist(
    (set) => ({
      votes: mockVotes,
      addVote: (vote) =>
        set((state) => {
          const exists = state.votes.some(
            (vo) => vo.pollId === vote.pollId && vo.userId === vote.userId,
          );

          if (exists) return state;

          return {
            votes: [
              ...state.votes,
              { pollId: vote.pollId, userId: vote.userId, value: vote.value },
            ],
          };
        }),
    }),
    {
      name: "votes",
      partialize: (state) => ({ votes: state.votes }),
    },
  ),
);
