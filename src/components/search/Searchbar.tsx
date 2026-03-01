import { Search, X } from "lucide-react";
import { useState } from "react";
import { useAppStore } from "@/store";
useAppStore

type SearchbarProps = {
  onClose: () => void;
};

const Searchbar = ({ onClose }: SearchbarProps) => {
  const [searchInput, setSearchInput] = useState("");
  const setSearchQuery = useAppStore((state) => state.setSearchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        className="w-full border rounded-full py-1 px-8 ring-custom focus:ring-2 outline-none focus:border-transparent"
        placeholder="Suche"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button
        className="absolute left-2 top-0 bottom-0 text-slate-800"
        type="submit"
      >
        <Search size={19} />
      </button>

      <button
        className="absolute right-2 top-0 bottom-0 text-slate-800 sm:hidden"
        type="button"
        onClick={onClose}
      >
        <X size={19} />
      </button>
    </form>
  );
};
export default Searchbar;
