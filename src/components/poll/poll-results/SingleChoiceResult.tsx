import type { Vote } from "@/types/vote";
import { getSingleChoiceResult } from "@/utils/results/getSingleChoiceResult";

type SingleChoiceResultProps = {
  votes: Vote[];
  options: string[];
};

const SingleChoiceResult = ({ votes, options }: SingleChoiceResultProps) => {
  const optionResults = getSingleChoiceResult(votes, options);

  console.log("optionResults", optionResults);

  return (
    <div className="flex flex-col items-start gap-2">
      {optionResults.map((opt) => (
        <div key={opt.label} className="w-full bg-gray-100 rounded-md">
          <div
            className="flex items-center justify-between gap-4 px-2 py-1 bg-gray-200 rounded-md "
            style={{ width: opt.percent === 0 ? "5%" : `${opt.percent}%` }}
          >
            <span>{opt.label}</span>
            <span className="text-xs font-medium">{opt.percent}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SingleChoiceResult;
