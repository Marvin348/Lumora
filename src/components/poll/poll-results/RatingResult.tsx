import type { Vote } from "@/types/vote";
import { getRatingResult } from "@/utils/results/getRatingResult";
import { Star } from "lucide-react";

export type Rating = {
  rating: number;
};

type RatingResultProps = {
  votes: Vote[];
};

const RatingResult = ({ votes }: RatingResultProps) => {
  const rating: Rating[] = [
    { rating: 1 },
    { rating: 2 },
    { rating: 3 },
    { rating: 4 },
    { rating: 5 },
  ];

  const ratingStats = getRatingResult(rating, votes);

  return (
    <div className="flex flex-col gap-2">
      {ratingStats.map((ra) => (
        <div key={ra.rating}>
          <div className="flex items-center">
            {[...Array(ra.rating)].map((_, i) => (
              <Star key={i} fill="#ffdf20" stroke={"none"} />
            ))}

            <div
              className="ml-2 bg-gray-200 rounded-md w-full px-2 py-1 text-xs font-medium"
              style={{ width: ra.percent === 0 ? "5%" : `${ra.percent}%` }}
            >
              {ra.percent}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RatingResult;
