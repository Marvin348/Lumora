type YesNoPollProps = {
  onAnswerChange: (value: boolean) => void;
  value: boolean | null;
};

const YesNoPoll = ({ onAnswerChange, value }: YesNoPollProps) => {
  const YES_NO_OPTIONS = [
    { label: "Ja", value: true },
    { label: "Nein", value: false },
  ];

  return (
    <div className="flex flex-col gap-2">
      {YES_NO_OPTIONS.map((opt) => (
        <label
          key={opt.label}
          className="flex items-center gap-4 bg-gray-200 px-2 py-1 rounded-md w-full"
        >
          <input
            type="radio"
            checked={value === opt.value}
            onChange={() => onAnswerChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
};
export default YesNoPoll;
