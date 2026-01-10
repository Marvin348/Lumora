import UserInfo from "@/components/user/UserInfo";
import type { PollsWithMeta } from "@/types/pollsWithMeta";
import { Bookmark, EllipsisVertical } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import { pollTypeComponentMap } from "@/components/poll/poll-types/pollTypeRenderer";
import { useState } from "react";

type PollCardProps = {
  poll: PollsWithMeta;
};

const PollCard = ({ poll }: PollCardProps) => {
  const { question, createdAt, type, votes, author, id, options } = poll;
  const [selectedValue, setSelectedValue] = useState<
    string | number | boolean | null
  >("");

  if (!author) return null;

  const PollTypeComponent = pollTypeComponentMap[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  console.log(selectedValue);

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <UserInfo user={author} />
        </div>
        <div>
          <button className="cursor-pointer text-slate-800 p-2 rounded-full hover:bg-gray-100">
            <Bookmark size={20} />
          </button>
          <button className="cursor-pointer text-slate-800 p-2 rounded-full hover:bg-gray-100">
            <EllipsisVertical size={20} />
          </button>
        </div>
      </div>

      <form>
        <p className="mt-4 mb-4">{question}</p>

        {PollTypeComponent && (
          <PollTypeComponent value={selectedValue} onAnswerChange={setSelectedValue} options={options} />
        )}

        <button className="mt-4 border p-1 px-2 rounded-md text-sm bg-custom text-white cursor-pointer hover:bg-custom/90">
          Bestätigen
        </button>
      </form>

      <p className="text-xs text-slate-600 text-right">
        {formatDate(createdAt)}
      </p>
    </>
  );
};
export default PollCard;
