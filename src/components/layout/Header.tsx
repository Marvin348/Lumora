import { Link } from "react-router";
import { Menu, Search } from "lucide-react";
import Searchbar from "@/components/search/Searchbar";
import { useState } from "react";

type HeaderProps = {
  onOpen: () => void;
};

const Header = ({ onOpen }: HeaderProps) => {
  const [openSearchbar, setOpenSearchbar] = useState(false);

  return (
    <nav className="flex items-center justify-between sm:justify-normal gap-6">
      <button className="md:hidden cursor-pointer" onClick={onOpen}>
        <Menu />
      </button>

      {/* Logo (verschwindet bei Search auf Mobile) */}
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

      {!openSearchbar && (
        <button
          className="sm:hidden cursor-pointer"
          onClick={() => setOpenSearchbar(true)}
        >
          <Search />
        </button>
      )}
    </nav>
  );
};
export default Header;
