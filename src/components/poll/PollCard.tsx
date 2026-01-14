import UserInfo from "@/components/user/UserInfo";
import type { PollsWithMeta } from "@/types/pollsWithMeta";
import { Bookmark, EllipsisVertical } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import YesNoPoll from "@/components/poll/poll-types/YesNoPoll";
import SingleChoicePoll from "@/components/poll/poll-types/SingleChoicePoll";
import RatingPoll from "@/components/poll/poll-types/RatingPoll";
import OpenEndedPoll from "@/components/poll/poll-types/OpenEndedPoll";
import { useMyVotesStore } from "@/store/useMyVotesStore";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { Button } from "@/components/ui/button";

type PollCardProps = {
  poll: PollsWithMeta;
};

const PollCard = ({ poll }: PollCardProps) => {
  const { question, createdAt, type, votes, author, authorId, id, options } =
    poll;
  const activeUserId = useActiveUserStore((state) => state.activeUserId);

  const [selectedValue, setSelectedValue] = useState<
    string | number | boolean | null
  >(null);

  const myVotes = useMyVotesStore((state) => state.myVotes);
  const addVote = useMyVotesStore((state) => state.addVote);

  if (!author) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!activeUserId) return;

    if (selectedValue !== null) {
      addVote({ pollId: id, userId: activeUserId, value: selectedValue });
    }
  };

  console.log("my votes", myVotes);

  const renderPollInput = () => {
    switch (type) {
      case "yes_no":
        return (
          <YesNoPoll
            value={selectedValue as boolean}
            onAnswerChange={setSelectedValue}
          />
        );
      case "single_choice":
        return (
          <SingleChoicePoll
            value={selectedValue as string}
            onAnswerChange={setSelectedValue}
            options={options ?? []}
          />
        );
      case "rating":
        return <RatingPoll onAnswerChange={setSelectedValue} />;

      case "open_ended":
        return (
          <OpenEndedPoll
            value={(selectedValue as string) ?? ""}
            onAnswerChange={setSelectedValue}
          />
        );
    }
  };

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

      <form onSubmit={handleSubmit}>
        <p className="mt-4 mb-4">{question}</p>

        {renderPollInput()}

        <Button className="mt-4 p-2 py-4 border-none rounded-md text-sm bg-custom text-white hover:bg-custom/90 hover:text-white" size="sm">
          Bestätigen
        </Button>
      </form>

      <p className="text-xs text-slate-600 text-right">
        {formatDate(createdAt)}
      </p>
    </>
  );
};
export default PollCard;
