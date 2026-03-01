import { useUserStats } from "@/hooks/useUserStats";
import UserInfo from "@/components/user/UserInfo";
import { useAppStore } from "@/store";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { Flame, Clock8 } from "lucide-react";
import type { PollType } from "@/types/pollType";
import { useUsersContext } from "@/context/useUserContext";

const UserStats = () => {
  const {
    pollsCreated,
    votesGiven,
    bookmarks,
    participationRate,
    lastActivityDate,
    mostActiveType,
  } = useUserStats();
  const users = useUsersContext();
  const activeUserId = useAppStore((state) => state.activeUserId);
  const activeUser = users.find((user) => user.id === activeUserId);

  if (!activeUser) return <div>Kein User aktiv</div>;

  const typeLabels: Record<PollType, string> = {
    yes_no: "Ja / Nein",
    rating: "Bewertung",
    open_ended: "Kommentar",
    single_choice: "Einzelauswahl",
  };

  return (
    <div className="border rounded-md bg-gray-50">
      <div className="p-4">
        <div className="flex flex-col items-center">
          <UserInfo user={activeUser} variant="centered" />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 ">
          <p className="text-center text-sm">
            <span className="block text-lg font-semibold">{pollsCreated}</span>{" "}
            Umfragen
          </p>
          <p className="text-center text-sm">
            <span className="block text-lg font-semibold">{votesGiven}</span>{" "}
            Abgestimmt
          </p>
          <p className="text-center text-sm">
            <span className="block text-lg font-semibold">{bookmarks}</span>{" "}
            Gespeichert
          </p>
        </div>
      </div>

      <div className="mt-2 pt-4 p-4 border-t">
        <div>
          <p className=" text-sm">Teilnahmequote</p>
          <div className="flex items-center gap-4">
            <div
              className="block h-3 bg-custom rounded-md"
              style={{
                width: participationRate === 0 ? "5%" : `${participationRate}%`,
              }}
            ></div>
            <p className="text-xs font-semibold">{participationRate}%</p>
          </div>
        </div>

        <div className="mt-3 text-sm flex items-center">
          <p className="flex items-center gap-2">
            <Clock8 /> letzte Aktivität
          </p>
          <span className="ml-4 font-semibold">
            {lastActivityDate
              ? getTimeAgo(lastActivityDate)
              : "Keine Aktivität"}
          </span>
        </div>

        <div className="mt-3 text-sm flex items-center">
          <p className="flex items-center gap-2">
            <Flame className="mb-1" fill="red" stroke="none" />
            Meist aktiv in
          </p>
          <span className="ml-4 font-semibold">
            {mostActiveType ? typeLabels[mostActiveType] : "Noch keine Daten"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default UserStats;
