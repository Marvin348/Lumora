import { Link } from "react-router";
import { Menu } from "lucide-react";

type HeaderProps = {
  onOpen: () => void;
};

const Header = ({ onOpen }: HeaderProps) => {
  return (
    <nav className="flex items-center gap-6">
      <button className="md:hidden cursor-pointer" onClick={onOpen}>
        <Menu />
      </button>
      <Link to="/">
        <h2 className="font-semibold text-3xl">Lumora</h2>
      </Link>
    </nav>
  );
};
export default Header;
