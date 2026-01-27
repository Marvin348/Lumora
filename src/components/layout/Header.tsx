import { Link } from "react-router";
import { Menu, Search, User } from "lucide-react";
import Searchbar from "@/components/search/Searchbar";
import { useState } from "react";
import { useUsersContext } from "@/context/useUserContext";
import UserMenu from "@/components/user/UserMenu";

type HeaderProps = {
  onOpen: () => void;
};

const Header = ({ onOpen }: HeaderProps) => {
  const [openSearchbar, setOpenSearchbar] = useState(false);
  const users = useUsersContext();

  return (
    <nav className="relative flex items-center justify-between sm:justify-normal gap-6">
      <button className="md:hidden cursor-pointer" onClick={onOpen}>
        <Menu />
      </button>

      {!openSearchbar && (
        <Link to="/">
          <h2 className="font-semibold text-3xl">Lumora</h2>
        </Link>
      )}

      <div
        className={`${
          openSearchbar ? "flex-1" : "hidden"
        } sm:inline-block w-75`}
      >
        <Searchbar onClose={() => setOpenSearchbar(false)} />
      </div>

      <div className="flex items-center">
        {!openSearchbar && (
          <button
            className="sm:hidden cursor-pointer"
            onClick={() => setOpenSearchbar(true)}
          >
            <Search />
          </button>
        )}

        <div>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};
export default Header;
