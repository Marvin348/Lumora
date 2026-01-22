import { Trash2, CircleAlert } from "lucide-react";

type PollDropdownProps = {
  canDelete: boolean;
  onDelete?: () => void;
};
const PollDropdown = ({ canDelete, onDelete }: PollDropdownProps) => {
  return (
    <div className="absolute top-9 right-2 flex flex-col  border bg-white rounded-md p-1">
      {canDelete && (
        <button
          className="flex items-center gap-2 text-sm text-red-700 p-2 rounded-md hover:bg-gray-100"
          onClick={onDelete}
        >
          <Trash2 className="shrink-0" size={18} /> Löschen
        </button>
      )}

      <button className="flex items-center gap-2 text-sm p-2 rounded-md hover:bg-gray-100">
        <CircleAlert className="shrink-0" size={18} /> Melden
      </button>
    </div>
  );
};
export default PollDropdown;
