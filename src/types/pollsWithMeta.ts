import type { Poll } from "@/types/poll";
import type { User } from "@/types/user";
import type { Vote } from "@/types/vote";

export type PollsWithMeta = Poll & {
  author?: User;
  votes: Vote[];
};
