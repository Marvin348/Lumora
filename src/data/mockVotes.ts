import type { Vote } from "@/types/vote";

export const mockVotes: Vote[] = [
  { pollId: "p1", userId: "u2", value: true },
  { pollId: "p1", userId: "u3", value: false },
  { pollId: "p1", userId: "u4", value: true },
  { pollId: "p1", userId: "u8", value: true },
  { pollId: "p1", userId: "u10", value: false },
  { pollId: "p2", userId: "u1", value: 4 },
  { pollId: "p3", userId: "u1", value: "Ostern" },
  { pollId: "p3", userId: "u2", value: "Weihnachten" },
  { pollId: "p3", userId: "u4", value: "Ostern" },
  { pollId: "p3", userId: "u10", value: "Silvester" },
  { pollId: "p3", userId: "u12", value: "Ostern" },
];
