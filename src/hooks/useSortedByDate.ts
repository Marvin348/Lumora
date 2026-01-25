export const useSortedByDate = <T extends { createdAt: string }>(items: T[]) =>
  [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
