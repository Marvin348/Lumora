import type { PollsWithMeta } from "@/types/pollsWithMeta";

export const useSortVotedPollsByDate = (
  polls: PollsWithMeta[],
  activeUserId: string,
) =>
  [...polls].sort((a, b) => {
    const voteA = a.votes.find((vote) => vote.userId === activeUserId);
    const voteB = b.votes.find((vote) => vote.userId === activeUserId);

    if (!voteA) return 1;
    if (!voteB) return -1;

    return (
      new Date(voteB.createdAt).getTime() - new Date(voteA.createdAt).getTime()
    );
  });
