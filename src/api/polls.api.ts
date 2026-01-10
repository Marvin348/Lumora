import { mockPolls } from "@/data/mockPolls";

export const fetchPolls = async () => {
  await new Promise((r) => setTimeout(r, 400));
  return mockPolls;
};
