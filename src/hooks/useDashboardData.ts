import { usePolls } from "@/hooks/usePolls";
import { useUsers } from "@/hooks/useUsers";
import { useVotes } from "@/hooks/useVotes";

export const useDashboardData = () => {
  const users = useUsers();
  const polls = usePolls();
  const votes = useVotes();

  const isLoading = users.isLoading || polls.isLoading || votes.isLoading;

  const error = users.error || polls.error || votes.error;

  if (!users.data || !polls.data || !votes.data)
    return {
      users: [],
      polls: [],
      votes: [],
      isLoading,
      error,
    };

  return {
    users: users.data,
    polls: polls.data,
    votes: votes.data,
    isLoading,
    error,
  };
};
