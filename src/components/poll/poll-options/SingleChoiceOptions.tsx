import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type SingleChoiceOptionsProps = {
  optionDraft: string[];
  addOptions: (value: string) => void;
  removeOption: (value: string) => void;
};

const SingleChoiceOptions = ({
  optionDraft,
  addOptions,
  removeOption,
}: SingleChoiceOptionsProps) => {
  const [choice, setChoice] = useState("");

  const handleAdd = () => {
    addOptions(choice);
    setChoice("");
  };

  console.log(choice);

  return (
    <>
      <div className="flex gap-6">
        <input
          type="text"
          className="w-full border rounded-md px-2 py-1 bg-gray-100"
          placeholder="Option eingeben"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
        />
        <Button
          className="border-none bg-custom text-white hover:bg-custom/95 hover:text-white"
          onClick={handleAdd}
          type="button"
        >
          + Hinzufügen
        </Button>
      </div>

      {optionDraft.length >= 4 && (
        <p className="mt-1 text-xs text-red-700">Maximale Optionen erreicht</p>
      )}

      {optionDraft.length >= 1 &&
        optionDraft.map((opt, i) => (
          <div key={opt + i} className="my-4">
            <div className="flex items-center justify-between gap-6 w-full border px-2 py-1 bg-gray-100 rounded-md">
              {opt}
              <button className="text-red-700 hover:opacity-80" type="button">
                <Trash2 size="17" onClick={() => removeOption(opt)} />
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
export default SingleChoiceOptions;
