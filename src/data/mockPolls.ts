import type { Poll } from "@/types/poll";

export const mockPolls: Poll[] = [
  {
    id: "p1",
    authorId: "u1",
    question: "Soll Homeoffice Pflicht sein?",
    type: "yes_no",
    createdAt: "2025-01-01",
  },
  {
    id: "p2",
    authorId: "u2",
    question: "Meinung zum neuen Chef?",
    type: "open_ended",
    createdAt: "2025-01-01",
  },
  {
    id: "p3",
    authorId: "u3",
    question: "Was ist dein lieblings Feiertag?",
    type: "single_choice",
    options: ["Ostern", "Weihnachten", "Silvester", "Test"],
    createdAt: "2025-01-01",
  },
  {
    id: "p4",
    authorId: "u4",
    question: "Wie zufrieden bist du mit dem Team?",
    type: "rating",
    createdAt: "2025-01-02",
  },
];
