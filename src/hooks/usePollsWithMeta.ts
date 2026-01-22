import { useVotesStore } from "@/store/votes/useVotesStore";
import type { Poll } from "@/types/poll";
import type { PollsWithMeta } from "@/types/pollsWithMeta";
import type { User } from "@/types/user";

export const usePollsWithMeta = (polls: Poll[], users: User[]) => {
  const votes = useVotesStore((state) => state.votes);

  const pollsWithMeta: PollsWithMeta[] = polls.map((poll) => {
    const author = users.find((user) => poll.authorId === user.id);
    const matchingVotes = votes.filter((vote) => poll.id === vote.pollId);

    return {
      ...poll,
      author,
      votes: matchingVotes,
    };
  });
  return pollsWithMeta;
};
