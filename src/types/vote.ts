export type Vote = {
  pollId: string;
  userId: string;
  value: boolean | number | string;
  createdAt: string
};
