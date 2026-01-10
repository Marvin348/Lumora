import YesNoPoll from "@/components/poll/poll-types/YesNoPoll";
import RatingPoll from "@/components/poll/poll-types/RatingPoll";
import OpenEndedPoll from "@/components/poll/poll-types/OpenEndedPoll";
import SingleChoicePoll from "@/components/poll/poll-types/SingleChoicePoll";

export const pollTypeComponentMap = {
  yes_no: YesNoPoll,
  single_choice: SingleChoicePoll,
  rating: RatingPoll,
  open_ended: OpenEndedPoll,
};
