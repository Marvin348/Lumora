import PollList from "@/components/poll/PollList";
import { useSearchPolls } from "@/hooks/useSearchPolls";
import Filterbar from "@/components/filter/Filterbar";
import { useAppStore } from "@/store";
import { useFilteredPolls } from "@/hooks/useFilteredPolls";
import { usePollsWithMeta } from "@/hooks/usePollsWithMeta";
import { useSortedByDate } from "@/hooks/useSortedByDate";

const DashboardPage = () => {
  const polls = useAppStore((state) => state.polls);
  const pollsWithMeta = usePollsWithMeta(polls);

  const filter = useAppStore((state) => state.filter);

  const searchQuery = useAppStore((state) => state.searchQuery);

  const sortedPolls = useSortedByDate(pollsWithMeta);
  const searchedPolls = useSearchPolls(searchQuery, sortedPolls);
  const filteredPolls = useFilteredPolls(searchedPolls, filter);

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
