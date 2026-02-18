import PollList from "@/components/poll/PollList";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useAppStore } from "@/store";
import { useSortedByDate } from "@/hooks/useSortedByDate";
import EmptyState from "@/components/EmptyState";
const MyPollsPage = () => {

  const polls = useAppStore((state) => state.polls);
  const activeUserId = useAppStore((state) => state.activeUserId);

  const myPolls = polls.filter((poll) => poll.authorId === activeUserId);

  const pollsWithMeta = usePollsWithMeta(myPolls);
  const sortedPolls = useSortedByDate(pollsWithMeta);

  if (myPolls.length === 0) {
    return <EmptyState pages="myPolls" />;
  }

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Meine Umfragen</h2>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls} />
      </div>
    </>
  );
};
export default MyPollsPage;
