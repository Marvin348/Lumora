import type { PollType } from "@/types/pollType";

export const FILTER_OPTIONS: {
  label: string;
  value: PollType;
}[] = [
  {
    label: "Ja / Nein",
    value: "yes_no",
  },
  {
    label: "Bewertung",
    value: "rating",
  },
  {
    label: "Kommentar",
    value: "open_ended",
  },
  {
    label: "Einzelauswahl",
    value: "single_choice",
  },
];
