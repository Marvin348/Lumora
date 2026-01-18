import type { PollsWithMeta } from "@/types/pollsWithMeta";
import PollCard from "./PollCard";
import type { User } from "@/types/user";

type PollListProps = {
  pollsWithMeta: PollsWithMeta[];
  users: User[];
};
const PollList = ({ pollsWithMeta, users }: PollListProps) => {
  return (
    <>
      {pollsWithMeta.map((poll) => (
        <div key={poll.id} className="border p-4 rounded-md">
          <PollCard poll={poll} users={users} />
        </div>
      ))}
    </>
  );
};
export default PollList;
