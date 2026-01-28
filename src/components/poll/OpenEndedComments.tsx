import type { Vote } from "@/types/vote";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import UserInfo from "@/components/user/UserInfo";
import type { VotesWithUser } from "@/types/votesWithUser";
import { useOpenEndedComments } from "@/hooks/useOpenEndedComments";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { useSortedByDate } from "@/hooks/useSortedByDate";
import { useUsersContext } from "@/context/useUserContext";

type OpenEndedCommentsProps = {
  votes: Vote[];
};

const OpenEndedComments = ({ votes }: OpenEndedCommentsProps) => {
  const users = useUsersContext();
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => setShowComments((prev) => !prev);

  const votesWithUser: VotesWithUser[] = votes.map((vo) => {
    const user = users.find((user) => user.id === vo.userId)!;

    return {
      ...vo,
      user,
    };
  });

  const sortedComments = useSortedByDate(votesWithUser)

  const { visibleCount, setVisibleCount, visibleComments, COMMENTS_PER_PAGE } =
    useOpenEndedComments(sortedComments);


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
            {visibleComments.map((vo) => {
              const timeAgo = getTimeAgo(vo.createdAt);

              return (
                <div key={vo.userId} className="mt-8 mb-4">
                  <div className="flex items-center gap-2">
                    <UserInfo user={vo.user} />
                  </div>

                  <p className="mt-2 text-sm ">{vo.value}</p>
                  <p className="text-xs text-muted-foreground">{timeAgo}</p>
                </div>
              );
            })}
          </div>
          {visibleCount < votesWithUser.length && (
            <button
              className="text-gray-800 text-xs underline"
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
