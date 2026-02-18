import PollList from "@/components/poll/PollList";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useAppStore } from "@/store";
import EmptyState from "@/components/EmptyState";
import { useSortedByDate } from "@/hooks/useSortedByDate";

const BookmarksPage = () => {
  const polls = useAppStore((state) => state.polls);

  const bookmark = useAppStore((state) => state.bookmark);
  const bookmarkedPolls = polls.filter((poll) => bookmark.includes(poll.id));

  const pollsWithMeta = usePollsWithMeta(bookmarkedPolls);
  const sortedPolls = useSortedByDate(pollsWithMeta);

  if (bookmarkedPolls.length === 0) return <EmptyState pages="bookmarks" />;


  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Gespeichert</h2>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls} />
      </div>
    </>
  );
};
export default BookmarksPage;
