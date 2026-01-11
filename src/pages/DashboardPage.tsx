import PollList from "@/components/poll/PollList";
import { useDashboardData } from "@/hooks/useDashboardData";
import type { PollsWithMeta } from "@/types/pollsWithMeta";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";

const DashboardPage = () => {
  const { users, polls, votes, isLoading, error } = useDashboardData();

  const activeUserId = useActiveUserStore((state) => state.activeUserId);
  const activeUser = users.find((user) => user.id === activeUserId);

  // console.log("users", users);
  // console.log("votes", votes);
  // console.log("polls", polls);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const pollsWithMeta: PollsWithMeta[] = polls?.map((poll) => {
    const author = users?.find((user) => poll.authorId === user.id);
    const matchingVotes = votes?.filter((vote) => poll.id === vote.pollId);

    return {
      ...poll,
      author,
      votes: matchingVotes,
    };
  });

  console.log("enriched", pollsWithMeta);
  console.log("activeUser", activeUser);

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <PollList pollsWithMeta={pollsWithMeta} />
      </div>
    </>
  );
};
export default DashboardPage;
