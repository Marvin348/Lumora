import { BookmarkPlus, BadgeCheck, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type EmptyStateProps = {
  pages?: "bookmarks" | "voted" | "myPolls";
};

const EmptyState = ({ pages }: EmptyStateProps) => {
  const EMPTY_TYPES = {
    bookmarks: {
      label: "Du hast noch keine Polls gespeichert.",
      icon: BookmarkPlus,
    },
    voted: { label: "Du hast noch nicht Angestimmt.", icon: BadgeCheck },
    myPolls: { label: "Du hast noch keine Umfragen erstellt.", icon: Vote },
  } as const;

  const config = pages ? EMPTY_TYPES[pages] : null;
  const Icon = config?.icon;

  return (
    <div className="flex items-center justify-center flex-1">
      <div className="flex flex-col items-center justify-center gap-2 xl:w-full xl:h-full bg-gray-100 p-20 rounded-md">
        <div className="bg-custom/50 rounded-md p-4">
          {Icon && <Icon size={150} color="white" />}
        </div>
        <p className="text-center">
          {pages ? EMPTY_TYPES[pages].label : "Keine Daten"}
        </p>
        <Link to="/">
          <Button className="bg-custom text-white border-none hover:bg-custom/90 hover:text-white">
            Hier Entdecken
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default EmptyState;
