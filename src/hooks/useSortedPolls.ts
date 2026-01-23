import type { PollsWithMeta } from "@/types/pollsWithMeta";

export const useSortedPolls = (pollsWithMeta: PollsWithMeta[]) =>
  [...pollsWithMeta].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
