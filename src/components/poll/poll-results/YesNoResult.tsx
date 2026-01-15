import type { Vote } from "@/types/vote";
import { getYesNoResult } from "@/utils/getYesNoResult";

type YesNoResultProps = {
  votes: Vote[];
};

const YesNoResult = ({ votes }: YesNoResultProps) => {
  const { yesPercent, noPercent } = getYesNoResult(votes);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="w-full bg-gray-100 rounded-md overflow-hidden">
        <div
          className="flex items-center justify-between w-full rounded-md px-2 py-1 bg-gray-200"
          style={{ width: `${yesPercent}%` }}
        >
          <span>Ja</span>
          <span className="text-xs font-medium">{yesPercent}%</span>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-md overflow-hidden">
        <div
          className="flex items-center justify-between w-full bg-gray-200 rounded-md px-2 py-1"
          style={{ width: `${noPercent}%` }}
        >
          <span>Nein</span>
          <span className="text-xs font-medium">{noPercent}%</span>
        </div>
      </div>
    </div>
  );
};
export default YesNoResult;
