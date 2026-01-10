import type { PollType } from "@/types/pollType";

export type Poll = {
  id: string;
  authorId: string;
  question: string;
  type: PollType;
  options?: string[];
  createdAt: string;
};
