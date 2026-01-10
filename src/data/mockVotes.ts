import type { Vote } from "@/types/vote";

export const mockVotes: Vote[] = [
  { pollId: "p1", userId: "u2", value: true },
  { pollId: "p1", userId: "u3", value: false },
  { pollId: "p2", userId: "u1", value: 4 },
];
