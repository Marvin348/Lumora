type OpenEndedPollProps = {
  onAnswerChange: (value: string) => void;
  value: string;
};

const OpenEndedPoll = ({ onAnswerChange, value }: OpenEndedPollProps) => {
  return (
    <textarea
      className="w-full p-2 resize-none border rounded-md ring-custom outline-none focus:ring-2 focus:border-transparent"
      placeholder="Deine Antwort"
      value={value}
      onChange={(e) => onAnswerChange(e.target.value)}
    ></textarea>
  );
};
export default OpenEndedPoll;
