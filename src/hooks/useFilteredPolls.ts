import type { Filter } from "@/store/slices/filter";
import type { PollsWithMeta } from "@/types/pollsWithMeta";

export const useFilteredPolls = (
  pollsWithMeta: PollsWithMeta[],
  filter: Filter
) =>
  pollsWithMeta.filter(
    (poll) => !filter.category || poll.type === filter.category
  );
