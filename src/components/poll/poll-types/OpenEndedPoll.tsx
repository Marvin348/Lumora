type OpenEndedPollProps = {
  onAnswerChange: (value: string) => void;
  value: string;
};

const OpenEndedPoll = ({ onAnswerChange, value }: OpenEndedPollProps) => {
  return (
    <textarea
      className="w-full p-2 resize-none border rounded-md bg-gray-100 min-h-20"
      placeholder="Deine Antwort"
      value={value}
      onChange={(e) => onAnswerChange(e.target.value)}
    ></textarea>
  );
};
export default OpenEndedPoll;
