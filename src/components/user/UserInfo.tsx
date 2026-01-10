import type { User } from "@/types/user";
import { AVATARS } from "@/data/avatar";

type UserInfoProps = {
  user: User;
};
const UserInfo = ({ user }: UserInfoProps) => {
  const { name, email, avatarKey } = user;
  return (
    <>
      {avatarKey ? (
        <img
          src={AVATARS[avatarKey]}
          alt="Avatar"
          className="size-10 rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center size-10 rounded-full bg-gray-100">
          AS
        </div>
      )}
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-800">{email}</p>
      </div>
    </>
  );
};
export default UserInfo;
