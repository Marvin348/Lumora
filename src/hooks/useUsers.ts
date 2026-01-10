import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api/users.api";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
