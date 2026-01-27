import { Link } from "react-router";
import { Menu, Search, User } from "lucide-react";
import Searchbar from "@/components/search/Searchbar";
import { useState } from "react";
import UserMenu from "@/components/user/UserMenu";
import logo from "@/assets/Lumora.svg";

type HeaderProps = {
  onOpen: () => void;
};

const Header = ({ onOpen }: HeaderProps) => {
  const [openSearchbar, setOpenSearchbar] = useState(false);

  return (
    <nav className="relative flex items-center justify-between sm:justify-normal gap-6">
      <button className="md:hidden cursor-pointer" onClick={onOpen}>
        <Menu />
      </button>

      {!openSearchbar && (
        <Link to="/">
          <img src={logo} alt="Lumora" className="w-35" />
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
