import PollList from "@/components/poll/PollList";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { useSortedByDate } from "@/hooks/useSortedByDate";
import { useUsersContext } from "@/context/useUserContext";
import EmptyState from "@/components/EmptyState";
const MyPollsPage = () => {
  const users = useUsersContext();

  const polls = usePollsStore((state) => state.polls);
  const activeUserId = useActiveUserStore((state) => state.activeUserId);

  const myPolls = polls.filter((poll) => poll.authorId === activeUserId);

  const pollsWithMeta = usePollsWithMeta(myPolls, users ?? []);
  const sortedPolls = useSortedByDate(pollsWithMeta);

  console.log("myPolls", myPolls);

  if (myPolls.length === 0) {
    return <EmptyState pages="myPolls" />;
  }

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Meine Umfragen</h2>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls} users={users} />
      </div>
    </>
  );
};
export default MyPollsPage;
