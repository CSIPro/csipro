import { Search } from "lucide-react";
import { BiSolidFilterAlt } from "react-icons/bi";

import AdvancedFilter from "./advanced-filter";
import { DefaultFilters } from "./default-filters";
import SortFilter from "./sort-filter";
import { SearchBar } from "../search-bar.tsx/search-bar";

const filters = [
  {
    name: "Todos",
    type: "button",
    href: "#",
  },
  {
    name: "Actuales",
    type: "button",
    href: "#",
  },
  {
    name: "Egresados",
    type: "button",
    href: "#",
  },
];

export default async function FilterSection() {
  return (
    <div className="flex w-full items-center justify-center gap-4 pb-6 max-md:px-3">
      <div className="max-sm:gap h-full w-full justify-start whitespace-nowrap">
        <DefaultFilters filters={filters} />
      </div>
      <div className="flex items-center justify-center gap-2 text-sm font-bold">
        <SortFilter />
        <AdvancedFilter />
      </div>
      {/* <div className="flex h-full w-full justify-end">
        <SearchBar
          shortPlaceholder="Busca miembros... "
          longPlaceholder="Busca miembros con palabras clave..."
        />
      </div> */}
    </div>
  );
}
