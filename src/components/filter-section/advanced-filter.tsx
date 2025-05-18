import { BiFilterAlt } from "react-icons/bi";

export default async function AdvancedFilter() {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#9870F4] bg-[#4600E5]/10 p-2 px-4 text-[#9870F4] hover:bg-[#7145D6] hover:text-white">
        <BiFilterAlt />
        Filtro avanzado
      </div>
    </div>
  );
}
