import { POLL_TYPE_OPTIONS } from "@/constants/filter-options";
import { Funnel } from "lucide-react";
import { useState } from "react";
import type { Filter } from "@/store/slices/filter";
import { useAppStore } from "@/store";
import { Button } from "@/components/ui/button";

type FilterbarProps = {
  filter: Filter;
};

const Filterbar = ({ filter }: FilterbarProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const setFilter = useAppStore((state) => state.setFilter);
  const clearFilter = useAppStore((state) => state.clearFilter);

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  return (
    <>
      <Button
        className={`relative bg-custom text-white border-none hover:bg-custom/90 hover:text-white`}
        onClick={toggleFilter}
      >
        <Funnel />
        {Object.keys(filter).length > 0 && (
          <span className="absolute left-1.5 bottom-2 font-medium text-sm size-2 bg-white rounded-full"></span>
        )}
      </Button>

      {isFilterOpen && (
        <div className="mt-2 flex flex-wrap gap-2 bg-white border shadow-sm p-2 py-3 rounded-md">
          <Button
            size="sm"
            variant="filter"
            onClick={clearFilter}
            data-state={!filter.category ? "active" : "inactive"}
          >
            Alle
          </Button>
          {POLL_TYPE_OPTIONS.map((opt) => (
            <Button
              key={opt.value}
              onClick={() => setFilter({ category: opt.value })}
              variant="filter"
              size="sm"
              data-state={filter.category === opt.value ? "active" : "inactive"}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};
export default Filterbar;
