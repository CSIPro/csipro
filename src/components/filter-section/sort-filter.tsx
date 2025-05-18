import { BiSortDown } from "react-icons/bi";

export default async function SortFilter() {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 rounded-md border border-[#9870F4] bg-[#4600E5]/10 p-2 px-4 font-bold text-[#9870F4] hover:bg-[#7145D6] hover:text-white">
        <BiSortDown />
        Sort
      </div>
    </div>
  );
}
