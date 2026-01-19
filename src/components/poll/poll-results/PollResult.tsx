import YesNoResult from "@/components/poll/poll-results/YesNoResult";
import SingleChoiceResult from "@/components/poll/poll-results/SingleChoiceResult";
import RatingResult from "@/components/poll/poll-results/RatingResult";
import type { PollsWithMeta } from "@/types/pollsWithMeta";

type PollResultProps = {
  poll: PollsWithMeta;
};

const PollResult = ({ poll }: PollResultProps) => {
  const { type, votes, options, } = poll;
  switch (type) {
    case "yes_no":
      return <YesNoResult votes={votes} />;

    case "single_choice":
      return <SingleChoiceResult votes={votes} options={options ?? []} />;

    case "rating":
      return <RatingResult votes={votes} />;
  }
};
export default PollResult;
