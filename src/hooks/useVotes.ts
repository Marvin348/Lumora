import { useQuery } from "@tanstack/react-query";
import { fetchVotes } from "@/api/votes.api";

export const useVotes = () =>
  useQuery({
    queryKey: ["votes"],
    queryFn: fetchVotes,
  });
