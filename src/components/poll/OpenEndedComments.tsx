import type { User } from "@/types/user";
import type { Vote } from "@/types/vote";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import UserInfo from "@/components/user/UserInfo";
import type { VotesWithUser } from "@/types/votesWithUser";
import { useOpenEndedComments } from "@/hooks/useOpenEndedComments";

type OpenEndedCommentsProps = {
  users: User[];
  votes: Vote[];
};

const OpenEndedComments = ({ users, votes }: OpenEndedCommentsProps) => {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => setShowComments((prev) => !prev);

  const votesWithUser: VotesWithUser[] = votes.map((vo) => {
    const user = users.find((user) => user.id === vo.userId)!;

    return {
      ...vo,
      user,
    };
  });

  const { visibleCount, setVisibleCount, visibleComments, COMMENTS_PER_PAGE } =
    useOpenEndedComments(votesWithUser);

  console.log("votesWithUser", votesWithUser);

  return (
    <>
      <button
        className="flex items-center gap-1 text-xs"
        onClick={toggleComments}
      >
        Kommentare anzeigen{" "}
        <ChevronUp
          size={15}
          className={`transition duration-200 ${showComments ? "rotate-180" : ""}`}
        />
      </button>
      {showComments && (
        <>
          {visibleComments.length === 0 && (
            <p className="text-xs text-muted-foreground">Keine Kommentare</p>
          )}

          <div>
            {visibleComments.map((vo) => (
              <div key={vo.userId} className="mt-8">
                <div className="flex items-center gap-2">
                  <UserInfo user={vo.user} />
                </div>
                <p className="text-sm mt-2">{vo.value}</p>
              </div>
            ))}
          </div>
          {visibleCount < votesWithUser.length && (
            <button
              className="text-gray-800 text-xs"
              onClick={() =>
                setVisibleCount((prev) => prev + COMMENTS_PER_PAGE)
              }
            >
              Mehr anzeigen
            </button>
          )}
        </>
      )}
    </>
  );
};
export default OpenEndedComments;
