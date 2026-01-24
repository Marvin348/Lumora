import PollList from "@/components/poll/PollList";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useUsers } from "@/hooks/useUsers";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { useFilterStore } from "@/store/filter/useFilterStore";
import Filterbar from "@/components/filter/Filterbar";
import { useFilteredPolls } from "@/hooks/useFilteredPolls";
import { useSortedByDate } from "@/hooks/useSortedByDate";
const MyPollsPage = () => {
  const { data: users, isLoading, error } = useUsers();

  const polls = usePollsStore((state) => state.polls);
  const activeUserId = useActiveUserStore((state) => state.activeUserId);

  const filter = useFilterStore((state) => state.filter);

  const myPolls = polls.filter((poll) => poll.authorId === activeUserId);

  const pollsWithMeta = usePollsWithMeta(myPolls, users ?? []);
  const sortedPolls = useSortedByDate(pollsWithMeta);
  const filteredPolls = useFilteredPolls(sortedPolls, filter);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!users) return [];

  console.log("myPolls", myPolls);

  return (
    <>
      <div className="mb-12">
        <Filterbar filter={filter} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={filteredPolls} users={users} />
      </div>
    </>
  );
};
export default MyPollsPage;
