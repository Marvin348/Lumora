import type { PollType } from "@/types/pollType";
import YesNoPoll from "@/components/poll/poll-types/YesNoPoll";
import SingleChoicePoll from "@/components/poll/poll-types/SingleChoicePoll";
import RatingPoll from "@/components/poll/poll-types/RatingPoll";
import OpenEndedPoll from "@/components/poll/poll-types/OpenEndedPoll";

type PollInputProps = {
  type: PollType;
  value: string | number | boolean | null;
  onChange: (value: any) => void;
  options?: string[];
};

const PollInput = ({ type, value, onChange, options }: PollInputProps) => {
  switch (type) {
    case "yes_no":
      return <YesNoPoll value={value as boolean} onAnswerChange={onChange} />;

    case "single_choice":
      return (
        <SingleChoicePoll
          value={value as string}
          options={options ?? []}
          onAnswerChange={onChange}
        />
      );

    case "rating":
      return <RatingPoll onAnswerChange={onChange} value={value as number} />;

    case "open_ended":
      return (
        <OpenEndedPoll
          value={(value as string) ?? ""}
          onAnswerChange={onChange}
        />
      );
  }
};
export default PollInput;
