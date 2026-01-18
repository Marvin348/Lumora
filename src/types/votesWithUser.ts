import type { User } from "@/types/user";
import type { Vote } from "@/types/vote";

export type VotesWithUser = Vote & {
  user: User;
};
