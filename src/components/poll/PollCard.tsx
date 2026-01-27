import UserInfo from "@/components/user/UserInfo";
import type { PollsWithMeta } from "@/types/pollsWithMeta";
import { Bookmark, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { useVotesStore } from "@/store/votes/useVotesStore";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { Button } from "@/components/ui/button";
import { useBookmarkStore } from "@/store/bookmark/useBookmarkStore";
import PollInput from "@/components/poll/poll-input/PollInput";
import PollResult from "@/components/poll/poll-results/PollResult";
import OpenEndedComments from "./OpenEndedComments";
import type { User } from "@/types/user";
import PollDropdown from "@/components/poll/PollDropdown";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { getTimeAgo } from "@/utils/getTimeAgo";

type PollCardProps = {
  poll: PollsWithMeta;
  users: User[];
};

const PollCard = ({ poll, users }: PollCardProps) => {
  const { question, createdAt, type, votes, author, id, options } = poll;
  const [openDropdown, setOpenDropdown] = useState(false);
  const activeUserId = useActiveUserStore((state) => state.activeUserId);

  const addVote = useVotesStore((state) => state.addVote);
  const deletePolls = usePollsStore((state) => state.deletePoll);

  const isBookmarked = useBookmarkStore((state) => state.bookmark.includes(id));
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

  const [selectedValue, setSelectedValue] = useState<
    string | number | boolean | null
  >(null);

  const isMyPoll = poll.authorId === activeUserId;

  const hasVotes = votes.some(
    (vote) => vote.pollId === id && vote.userId === activeUserId,
  );

  const pollTimeAgo = getTimeAgo(createdAt);
  const myVote = votes.find((vote) => vote.userId === activeUserId);
  const voteTimeAgo = myVote ? getTimeAgo(myVote?.createdAt) : null;

  if (!author) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!activeUserId) return;

    if (selectedValue !== null) {
      addVote({ pollId: id, userId: activeUserId, value: selectedValue });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center min-w-0 gap-2">
          <UserInfo user={author} />
        </div>

        <div className="relative flex items-center">
          <Button
            className="border-none shadow-none shrink-0"
            size="icon-sm"
            onClick={() => toggleBookmark(id)}
          >
            <Bookmark
              fill={isBookmarked ? "#06402b" : "none"}
              stroke={isBookmarked ? "#06402b" : "currentColor"}
              className="!size-5"
            />
          </Button>
          <Button
            className="border-none shadow-none shrink-0"
            size="icon-sm"
            onClick={() => setOpenDropdown((prev) => !prev)}
          >
            <EllipsisVertical className="!size-5" />
          </Button>

          {openDropdown && (
            <PollDropdown
              canDelete={isMyPoll}
              onDelete={() => deletePolls(id)}
            />
          )}
        </div>
      </div>

      {hasVotes && (
        <p className="mt-2 text-xs text-muted-foreground">
          Abgestimmt {voteTimeAgo}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mb-4">
        <p className="mt-4 mb-4">{question}</p>

        {!hasVotes ? (
          <PollInput
            value={selectedValue}
            onChange={setSelectedValue}
            type={type}
            options={options}
          />
        ) : (
          <PollResult poll={poll} />
        )}

        {!hasVotes && (
          <Button
            className="mt-4 p-2 py-4 border-none rounded-md text-sm bg-custom text-white hover:bg-custom/90 hover:text-white"
            size="sm"
          >
            Bestätigen
          </Button>
        )}
      </form>

      {type === "open_ended" && (
        <OpenEndedComments users={users} votes={votes} />
      )}

      <p className="mt-2 text-xs text-right text-muted-foreground">
        {pollTimeAgo}
      </p>
    </>
  );
};
export default PollCard;
