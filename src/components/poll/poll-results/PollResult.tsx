import OpenEndedResult from "@/components/poll/poll-results/OpenEndedResult";
import YesNoResult from "@/components/poll/poll-results/YesNoResult";
import SingleChoiceResult from "@/components/poll/poll-results/SingleChoiceResult";
import RatingResult from "@/components/poll/poll-results/RatingResult";
import type { PollsWithMeta } from "@/types/pollsWithMeta";

type PollResultProps = {
  poll: PollsWithMeta;
};

const PollResult = ({ poll }: PollResultProps) => {
  const { type, author, votes } = poll;
  switch (type) {
    case "yes_no":
      return <YesNoResult votes={votes} />;

    case "single_choice":
      return <SingleChoiceResult />;

    case "rating":
      return <RatingResult />;

    case "open_ended":
      return <OpenEndedResult />;
  }
};
export default PollResult;
