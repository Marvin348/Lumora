import PollList from "@/components/poll/PollList";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { useSearchStore } from "@/store/search/useSearchStore";
import { useSearchPolls } from "@/hooks/useSearchPolls";
import Filterbar from "@/components/filter/Filterbar";
import { useFilterStore } from "@/store/filter/useFilterStore";
import { useFilteredPolls } from "@/hooks/useFilteredPolls";
import { useBookmarkStore } from "@/store/bookmark/useBookmarkStore";
import { useVotesStore } from "@/store/votes/useVotesStore";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { useUsers } from "@/hooks/useUsers";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
const DashboardPage = () => {
  const { data: users, isLoading, error } = useUsers();

  const polls = usePollsStore((state) => state.polls);
  const pollsWithMeta = usePollsWithMeta(polls, users ?? []);

  const votes = useVotesStore((state) => state.votes);

  const filter = useFilterStore((state) => state.filter);
  const bookmark = useBookmarkStore((state) => state.bookmark);

  const activeUserId = useActiveUserStore((state) => state.activeUserId);
  const activeUser = users?.find((user) => user.id === activeUserId);

  const searchQuery = useSearchStore((state) => state.searchQuery);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!users) return [];
  console.log(users);

  const searchedPolls = useSearchPolls(searchQuery, pollsWithMeta);
  const filteredPolls = useFilteredPolls(searchedPolls, filter);

  console.log("enriched", pollsWithMeta);
  console.log("activeUser", activeUser);
  console.log("filter", filter);
  console.log("bookmark", bookmark);

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
export default DashboardPage;
