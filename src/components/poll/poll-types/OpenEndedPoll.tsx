type OpenEndedPollProps = {
  onAnswerChange: (value: string) => void;
  value: string;
};

const OpenEndedPoll = ({ onAnswerChange, value }: OpenEndedPollProps) => {
  return (
    <textarea
      className="w-full p-2 resize-none border border-slate-800 rounded-md"
      placeholder="Deine Antwort"
      value={value}
      onChange={(e) => onAnswerChange(e.target.value)}
    ></textarea>
  );
};
export default OpenEndedPoll;
