import { mockVotes } from "@/data/mockVotes";

export const fetchVotes = async () => {
  await new Promise((r) => setTimeout(r, 400));
  return mockVotes;
};
