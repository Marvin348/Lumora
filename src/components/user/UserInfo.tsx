import type { User } from "@/types/user";
import { AVATARS } from "@/data/avatar";

type UserInfoProps = {
  user: User;
  variant?: "default" | "centered";
};
const UserInfo = ({ user, variant }: UserInfoProps) => {
  const { name, email, avatarKey } = user;

  const isCentered = variant === "centered";

  return (
    <>
      {avatarKey ? (
        <img
          src={AVATARS[avatarKey]}
          alt="Avatar"
          className={`rounded-full ${isCentered ? "size-18" : "size-10"}`}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-gray-100 ${isCentered ? "size-18" : "size-10"}`}
        >
          AS
        </div>
      )}
      <div className={isCentered ? "text-center" : ""}>
        <p className={`font-medium ${isCentered ? "text-lg" : "text-sm"}`}>{name}</p>
        <p className="text-xs text-slate-800">{email}</p>
      </div>
    </>
  );
};
export default UserInfo;
