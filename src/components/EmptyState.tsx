import { BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const EmptyState = ({ text }: { text: string }) => {

  // lookup func for votesPage, bookmarkPage, myPollsPage with icon and label
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2 bg-gray-100 p-20 rounded-md">
        <div className="bg-custom/50 rounded-md">
          <BookmarkPlus size={150} color="white" />
        </div>
        <p className="text-center">{text}</p>
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
