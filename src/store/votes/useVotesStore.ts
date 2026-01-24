import { mockVotes } from "@/data/mockVotes";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Vote } from "@/types/vote";

type VoteInput = {
  pollId: string;
  userId: string;
  value: string | number | boolean;
};

type VotesStore = {
  votes: Vote[];
  addVote: (vote: VoteInput) => void;
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

          const newVote = {
            pollId: vote.pollId,
            userId: vote.userId,
            value: vote.value,
            createdAt: new Date().toISOString(),
          };

          return {
            votes: [...state.votes, newVote],
          };
        }),
    }),
    {
      name: "votes",
      partialize: (state) => ({ votes: state.votes }),
    },
  ),
);
