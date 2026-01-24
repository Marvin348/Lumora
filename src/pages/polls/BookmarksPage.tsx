import PollList from "@/components/poll/PollList";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useUsers } from "@/hooks/useUsers";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { useBookmarkStore } from "@/store/bookmark/useBookmarkStore";
import EmptyState from "@/components/EmptyState";
import { Spinner } from "@/components/ui/spinner";
import { useSortedByDate } from "@/hooks/useSortedByDate";

const BookmarksPage = () => {
  const { data: users, isLoading, error } = useUsers();
  const polls = usePollsStore((state) => state.polls);

  const bookmark = useBookmarkStore((state) => state.bookmark);
  const bookmarkedPolls = polls.filter((poll) => bookmark.includes(poll.id));

  const pollsWithMeta = usePollsWithMeta(bookmarkedPolls, users ?? []);
  const sortedPolls = useSortedByDate(pollsWithMeta);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;
  if (!users) return [];

  if (bookmarkedPolls.length === 0)
    return <EmptyState text="Du hast noch keine Polls gespeichert." />;

  console.log(bookmarkedPolls);

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls} users={users} />
      </div>
    </>
  );
};
export default BookmarksPage;
