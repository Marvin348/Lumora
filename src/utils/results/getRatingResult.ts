import type { Rating } from "@/components/poll/poll-results/RatingResult";
import type { Vote } from "@/types/vote";

export const getRatingResult = (rating: Rating[], votes: Vote[]) => {
  const totalVotes = votes.length;

  return rating.map((ra) => {
    const count = votes.filter((vo) => vo.value === ra.rating).length;
    const percent = totalVotes ? Math.round((count / totalVotes) * 100) : 0;

    return {
      ...ra,
      count,
      percent,
    };
  });
};
