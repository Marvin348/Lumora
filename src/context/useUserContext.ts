import { createContext, useContext } from "react";
import type { User } from "@/types/user";

export const UserContext = createContext<User[] | null>(null);

export const useUsersContext = () => {
  const users = useContext(UserContext);
  if (!users) throw new Error("useUsersContext outside provider");
  return users;
};
