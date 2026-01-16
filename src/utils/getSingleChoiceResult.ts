import type { Vote } from "@/types/vote";

export const getSingleChoiceResult = (votes: Vote[], options: string[]) => {
  const totalVotes = votes.length;

  return options.map((opt) => {
    const count = votes.filter((vo) => vo.value === opt).length;
    const percent = totalVotes ? Math.round((count / totalVotes) * 100) : 0;

    return {
      label: opt,
      count,
      percent,
    };
  });
};
