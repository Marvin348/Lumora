import type { VotesWithUser } from "@/types/votesWithUser";
import { useState } from "react";

export const useOpenEndedComments = (votesWithUser: VotesWithUser[]) => {
  const COMMENTS_PER_PAGE = 5;

  const [visibleCount, setVisibleCount] = useState(COMMENTS_PER_PAGE);
  const visibleComments = votesWithUser.slice(0, visibleCount);

  return { visibleCount, setVisibleCount, visibleComments, COMMENTS_PER_PAGE };
};
