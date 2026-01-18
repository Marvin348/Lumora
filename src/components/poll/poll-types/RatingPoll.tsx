import { Star } from "lucide-react";
import { useState } from "react";

type RatingPollProps = {
  onAnswerChange: (value: number) => void;
  value: number;
};

const RatingPoll = ({ onAnswerChange, value }: RatingPollProps) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const activeRating = hoverRating ?? value ?? 0;

  const RATING_OPTIONS = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-between w-40 ">
      {RATING_OPTIONS.map((r) => {
        const isActive = r <= activeRating;
        return (
          <button
            key={r}
            type="button"
            onMouseEnter={() => setHoverRating(r)}
            onMouseLeave={() => setHoverRating(null)}
            onClick={() => onAnswerChange(r)}
          >
            <Star
              className="transition-colors duration-150"
              fill={isActive ? "#ffdf20" : "none"}
              stroke={isActive ? "#ffdf20" : "currentColor"}
            />
          </button>
        );
      })}
    </div>
  );
};
export default RatingPoll;
