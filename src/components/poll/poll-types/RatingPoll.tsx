import { Star } from "lucide-react";

type RatingPollProps = {
  onAnswerChange: (value: number) => void;
};

const RatingPoll = ({ onAnswerChange, }: RatingPollProps) => {
  const RATING_OPTIONS = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-between w-40 ">
      {RATING_OPTIONS.map((r) => (
        <button
          key={r}
          type="button"
          className="transition duration-200 ease-in-out text-slate-800 cursor-pointer hover:text-yellow-300"
          onClick={() => onAnswerChange(r)}
        >
          <Star />
        </button>
      ))}
    </div>
  );
};
export default RatingPoll;
