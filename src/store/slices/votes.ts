import type { StateCreator } from "zustand";
import type { AppStore } from "@/store";
import { mockVotes } from "@/data/mockVotes";
import type { Vote } from "@/types/vote";

type VoteInput = {
  pollId: string;
  userId: string;
  value: string | number | boolean;
};

export type VotesSlice = {
  votes: Vote[];
  addVote: (vote: VoteInput) => void;
};

export const createVotesSlice: StateCreator<AppStore, [], [], VotesSlice> = (
  set,
) => ({
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
});
