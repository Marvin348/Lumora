import type { PollType } from "@/types/pollType";

export type UserStats = {
  pollsCreated: number;
  votesGiven: number;
  bookmarks: number;
  participationRate: number;
  lastActivityDate: string | null;
  mostActiveType?: PollType;
};
