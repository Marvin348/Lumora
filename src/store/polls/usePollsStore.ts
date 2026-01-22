import { mockPolls } from "@/data/mockPolls";
import type { Poll } from "@/types/poll";
import type { PollType } from "@/types/pollType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PollInput = {
  authorId: string;
  question: string;
  type: PollType;
  options?: string[];
};

type PollsStore = {
  polls: Poll[];
  createPoll: (input: PollInput) => void;
  deletePoll: (id: string) => void;
};

export const usePollsStore = create<PollsStore>()(
  persist(
    (set) => ({
      polls: mockPolls,
      createPoll: (input) =>
        set((state) => {
          const newPoll: Poll = {
            id: crypto.randomUUID(),
            authorId: input.authorId,
            question: input.question,
            type: input.type,
            options: input.options,
            createdAt: new Date().toISOString(),
          };

          return {
            polls: [...state.polls, newPoll],
          };
        }),
        
      deletePoll: (id) =>
        set((state) => ({
          polls: state.polls.filter((poll) => poll.id !== id),
        })),
    }),
    {
      name: "polls",
      partialize: (state) => ({ polls: state.polls }),
    },
  ),
);
