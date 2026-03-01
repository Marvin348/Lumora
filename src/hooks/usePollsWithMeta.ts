import { useUsersContext } from "@/context/useUserContext";
import { useAppStore } from "@/store";
import type { Poll } from "@/types/poll";
import type { PollsWithMeta } from "@/types/pollsWithMeta";

export const usePollsWithMeta = (polls: Poll[]) => {
  const users = useUsersContext();
  const votes = useAppStore((state) => state.votes);

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
