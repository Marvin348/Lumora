import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { usePollsStore } from "@/store/polls/usePollsStore";
import PollList from "@/components/poll/PollList";
import { useSortVotedPollsByDate } from "@/hooks/useSortVotedPollsByDate";
import { useUsersContext } from "@/context/useUserContext";

const VotedPolls = () => {
  const users = useUsersContext();

  const polls = usePollsStore((state) => state.polls);
  const activeUserId = useActiveUserStore((state) => state.activeUserId);

  if (!activeUserId) return <div>Kein User aktiv</div>;

  const pollsWithMeta = usePollsWithMeta(polls, users);

  const votedPolls = pollsWithMeta.filter((poll) =>
    poll.votes.some((vote) => vote.userId === activeUserId),
  );
  const sortedPolls = useSortVotedPollsByDate(votedPolls, activeUserId);

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Abgestimmt</h2>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls} users={users} />
      </div>
    </>
  );
};
export default VotedPolls;
