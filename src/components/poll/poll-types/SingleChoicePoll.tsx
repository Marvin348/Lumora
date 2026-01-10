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
          className="flex items-center gap-4 bg-gray-200 px-2 py-1 rounded-md w-full"
        >
          <input
            type="radio"
            checked={value === opt}
            onChange={() => onAnswerChange(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
};
export default SingleChoicePoll;
