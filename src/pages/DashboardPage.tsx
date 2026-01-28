import PollList from "@/components/poll/PollList";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { useSearchStore } from "@/store/search/useSearchStore";
import { useSearchPolls } from "@/hooks/useSearchPolls";
import Filterbar from "@/components/filter/Filterbar";
import { useFilterStore } from "@/store/filter/useFilterStore";
import { useFilteredPolls } from "@/hooks/useFilteredPolls";
import { useBookmarkStore } from "@/store/bookmark/useBookmarkStore";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useSortedByDate } from "@/hooks/useSortedByDate";
import { useUsersContext } from "@/context/useUserContext";

const DashboardPage = () => {
  const users = useUsersContext();

  const polls = usePollsStore((state) => state.polls);
  const pollsWithMeta = usePollsWithMeta(polls);

  const filter = useFilterStore((state) => state.filter);
  const bookmark = useBookmarkStore((state) => state.bookmark);

  const activeUserId = useActiveUserStore((state) => state.activeUserId);
  const activeUser = users.find((user) => user.id === activeUserId);

  const searchQuery = useSearchStore((state) => state.searchQuery);

  const sortedPolls = useSortedByDate(pollsWithMeta);
  const searchedPolls = useSearchPolls(searchQuery, sortedPolls);
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
        <PollList pollsWithMeta={filteredPolls} />
      </div>
    </>
  );
};
export default DashboardPage;
