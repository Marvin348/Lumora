import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useAppStore } from "@/store";
import PollList from "@/components/poll/PollList";
import { useSortVotedPollsByDate } from "@/hooks/useSortVotedPollsByDate";
import EmptyState from "@/components/EmptyState";

const VotedPolls = () => {
  const polls = useAppStore((state) => state.polls);
  const activeUserId = useAppStore((state) => state.activeUserId);

  if (!activeUserId) return <div>Kein User aktiv</div>;

  const pollsWithMeta = usePollsWithMeta(polls);

  const votedPolls = pollsWithMeta.filter((poll) =>
    poll.votes.some((vote) => vote.userId === activeUserId),
  );
  const sortedPolls = useSortVotedPollsByDate(votedPolls, activeUserId);

  if(votedPolls.length === 0) return <EmptyState pages="voted"/>

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Abgestimmt</h2>

      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={sortedPolls}/>
      </div>
    </>
  );
};
export default VotedPolls;
