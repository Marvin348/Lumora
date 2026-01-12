import type { PollsWithMeta } from "@/types/pollsWithMeta";

export const useSearchPolls = (
  searchQuery: string,
  pollsWithMeta: PollsWithMeta[]
) =>
  pollsWithMeta.filter((meta) => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();

    const matchesPoll =
      meta.question.toLowerCase().includes(query) ||
      meta.type.toLowerCase().includes(query);

    const matchesUser =
      !meta?.author?.name || meta.author.name.toLowerCase().includes(query);

    return matchesPoll || matchesUser;
  });
