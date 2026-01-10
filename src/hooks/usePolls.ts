import { fetchPolls } from "@/api/polls.api";
import { useQuery } from "@tanstack/react-query";

export const usePolls = () =>
  useQuery({
    queryKey: ["polls"],
    queryFn: fetchPolls,
  });
