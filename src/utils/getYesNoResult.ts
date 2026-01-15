import type { Vote } from "@/types/vote";

export const getYesNoResult = (votes: Vote[]) => {
  const yesVotes = votes.filter((vo) => vo.value === true).length;
  const noVotes = votes.filter((vo) => vo.value === false).length;

  const total = yesVotes + noVotes;

  const yesPercent = total ? Math.round((yesVotes / total) * 100) : 0;
  const noPercent = total ? Math.round((noVotes / total) * 100) : 0;

  return { yesPercent, noPercent };
};
