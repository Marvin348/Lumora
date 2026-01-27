import { User } from "lucide-react";
import UserStats from "@/components/user/UserStats";
import { useState, useRef, useEffect } from "react";

const UserMenu = () => {
  const [openUserStats, setOpenUserStats] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpenUserStats(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenUserStats(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="ml-4 mt-1 xl:hidden"
        onClick={() => setOpenUserStats((prev) => !prev)}
      >
        <User />
      </button>

      {openUserStats && (
        <div className="absolute right-0 md:-right-30 mt-2 bg-white border rounded-xl shadow-lg p-4 animate-in fade-in slide-in-from-top-2 z-50">
          <UserStats />
        </div>
      )}
    </div>
  );
};
export default UserMenu;
