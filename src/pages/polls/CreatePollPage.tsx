import SingleChoiceOptions from "@/components/poll/poll-options/SingleChoiceOptions";
import { Button } from "@/components/ui/button";
import { POLL_TYPE_OPTIONS } from "@/constants/filter-options";
import { usePollsStore } from "@/store/polls/usePollsStore";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { useState } from "react";
import type { PollType } from "@/types/pollType";
const CreatePollPage = () => {
  const [questinInput, setQuestionInput] = useState("");
  const [selectedType, setSelectedType] = useState<PollType | null>(null);
  const [optionDraft, setOptionDraft] = useState<string[]>([]);

  const activeUserId = useActiveUserStore((state) => state.activeUserId);

  const polls = usePollsStore((state) => state.polls);
  const createPoll = usePollsStore((state) => state.createPoll);

  const addOptions = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setOptionDraft((prev) => {
      if (prev.length >= 4) return prev;
      if (prev.includes(trimmed)) return prev;

      return [...prev, trimmed];
    });
  };

  const removeOption = (text: string) =>
    setOptionDraft((prev) => prev.filter((opt) => opt !== text));

  const clearOptions = () => setOptionDraft([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!questinInput || !activeUserId) return;

    if (selectedType !== null) {
      createPoll({
        authorId: activeUserId,
        question: questinInput,
        type: selectedType,
        options: optionDraft,
      });
    }
    setQuestionInput("");
  };

  const disabled = selectedType === "single_choice" && optionDraft.length < 2;

  console.log(polls);
  console.log(selectedType);
  console.log("optionDraft", optionDraft);
  return (
    <>
      <h2 className="text-2xl font-semibold">Umfrage erstellen</h2>
      <h5 className="mt-6 text-md font-medium">Frage</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-30 my-2 bg-gray-100 resize-none border rounded-md p-2"
          value={questinInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        ></textarea>

        <div className="mb-6">
          <h5 className="mb-2 font-medium">Umfrage Typ</h5>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
            {POLL_TYPE_OPTIONS.map((opt) => (
              <Button
                key={opt.value}
                type="button"
                className="mr-4 rounded-md border shadow-none"
                onClick={() => {
                  setSelectedType(opt.value);
                  clearOptions();
                }}
                data-state={selectedType === opt.value ? "active" : "inactive"}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </div>

        {selectedType === "single_choice" && (
          <div className="mb-6">
            <SingleChoiceOptions
              optionDraft={optionDraft}
              addOptions={addOptions}
              removeOption={removeOption}
            />
          </div>
        )}

        <Button
          className="w-full border-none bg-custom text-white hover:bg-custom/95 hover:text-white disabled:opacity-80 "
          type="submit"
          disabled={disabled}
        >
          Erstellen
        </Button>
      </form>
    </>
  );
};
export default CreatePollPage;
