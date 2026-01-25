import PollList from "@/components/poll/PollList";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { useBookmarkStore } from "@/store/bookmark/useBookmarkStore";
import EmptyState from "@/components/EmptyState";
import { useSortedByDate } from "@/hooks/useSortedByDate";
import { useUsersContext } from "@/context/useUserContext";

const BookmarksPage = () => {
  const users = useUsersContext();
  const polls = usePollsStore((state) => state.polls);

  const bookmark = useBookmarkStore((state) => state.bookmark);
  const bookmarkedPolls = polls.filter((poll) => bookmark.includes(poll.id));

  const pollsWithMeta = usePollsWithMeta(bookmarkedPolls, users ?? []);
  const sortedPolls = useSortedByDate(pollsWithMeta);

  if (bookmarkedPolls.length === 0)
    return <EmptyState text="Du hast noch keine Polls gespeichert." />;

  console.log(bookmarkedPolls);

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Gespeichert</h2>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls} users={users} />
      </div>
    </>
  );
};
export default BookmarksPage;
