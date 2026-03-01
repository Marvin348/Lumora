import { useAppStore } from "@/store";
import type { PollType } from "@/types/pollType";
import type { UserStats } from "@/types/userStats";

export const useUserStats = (): UserStats => {
  const activeUserId = useAppStore((state) => state.activeUserId);
  const polls = useAppStore((state) => state.polls);
  const votes = useAppStore((state) => state.votes);
  const bookmark = useAppStore((state) => state.bookmark);

  const pollsCreated = polls.filter(
    (poll) => poll.authorId === activeUserId,
  ).length;

  const votesGiven = votes.filter(
    (vote) => vote.userId === activeUserId,
  ).length;

  const bookmarks = bookmark.length;

  // in percent
  const participationRate = polls.length
    ? Math.round((votesGiven / polls.length) * 100)
    : 0;

  // lastActivity
  const allUserPollDates = polls
    .filter((poll) => poll.authorId === activeUserId)
    .map((poll) => poll.createdAt);

  const allUserVoteDates = votes
    .filter((vote) => vote.userId === activeUserId)
    .map((vote) => vote.createdAt);

  const totalUserDates = [...allUserPollDates, ...allUserVoteDates];

  const sortedTotalUserDates = totalUserDates.sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  const lastActivityDate = sortedTotalUserDates.length
    ? sortedTotalUserDates[0]
    : null;

  // mostActiveType
  const userVotes = votes.filter((vote) => vote.userId === activeUserId);

  const matchesPoll = polls.filter((poll) =>
    userVotes.find((vote) => vote.pollId === poll.id),
  );

  const totalActiveType = matchesPoll.reduce(
    (acc, poll) => {
      if (poll.type === "open_ended") {
        acc.open_ended += 1;
      }
      if (poll.type === "rating") {
        acc.rating += 1;
      }
      if (poll.type === "single_choice") {
        acc.single_choice += 1;
      }
      if (poll.type === "yes_no") {
        acc.yes_no += 1;
      }

      return acc;
    },
    {
      yes_no: 0,
      rating: 0,
      open_ended: 0,
      single_choice: 0,
    },
  );

  let maxCount = 0;
  let mostActiveType: PollType | undefined = undefined;

  for (const [type, count] of Object.entries(totalActiveType)) {
    if (count > maxCount) {
      maxCount = count;
      mostActiveType = type as PollType;
    }
  }

  return {
    pollsCreated,
    votesGiven,
    bookmarks,
    participationRate,
    lastActivityDate,
    mostActiveType,
  };
};
