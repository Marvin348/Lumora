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
          className="transition duration-200 ease-in-out text-slate-800 cursor-pointer "
          onClick={() => onAnswerChange(r)}
        >
          <Star fill="#ffdf20" stroke={"currentColor"} />
        </button>
      ))}
    </div>
  );
};
export default RatingPoll;
