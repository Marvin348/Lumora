import { SIDEBAR_LINKS } from "@/constants/sidebar-links";
import { NavLink } from "react-router";
import { X } from "lucide-react";

type SidebarProps = {
  onClose: () => void;
  onOpen: boolean;
};

const Sidebar = ({ onClose, onOpen }: SidebarProps) => {
  return (
    <>
      <div
        className={`overlay ${
          onOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <aside
        className={`fixed top-0 bottom-0 w-65 bg-white p-4 px-6 rounded-r-md transition duration-400 ease-in-out z-50 ${
          onOpen ? "translate-x-0" : "-translate-x-full"
        } md:static min-h-screen md:translate-x-0 md:border-r md:rounded-none`}
      >
        <div className="flex justify-end mb-8 md:hidden">
          <button
            className="block rounded-full p-1 cursor-pointer"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          {SIDEBAR_LINKS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 rounded-md  ${
                  isActive ? "bg-custom text-white" : ""
                }`
              }
            >
              <Icon /> {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};
export default Sidebar;
