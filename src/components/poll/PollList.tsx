import type { PollsWithMeta } from "@/types/pollsWithMeta";
import PollCard from "./PollCard";

type PollListProps = {
  pollsWithMeta: PollsWithMeta[];
};
const PollList = ({ pollsWithMeta }: PollListProps) => {
  return (
    <>
      {pollsWithMeta.map((poll) => (
        <div key={poll.id} className="border border-slate-800 p-4 rounded-md">
          <PollCard poll={poll} />
        </div>
      ))}
    </>
  );
};
export default PollList;
