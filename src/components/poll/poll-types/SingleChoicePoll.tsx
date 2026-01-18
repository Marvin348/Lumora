type SingleChoicePollProps = {
  onAnswerChange: (value: string) => void;
  options: string[];
  value: string | null;
};

const SingleChoicePoll = ({
  onAnswerChange,
  options,
  value,
}: SingleChoicePollProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="poll-label"
        >
          <input
            type="radio"
            checked={value === opt}
            onChange={() => onAnswerChange(opt)}
            className="radio-btn"
          />
          {opt}
        </label>
      ))}
    </div>
  );
};
export default SingleChoicePoll;
