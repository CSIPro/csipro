"use client";

import { Search } from "lucide-react";
import { FC } from "react";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder = "Buscar en página...",
}) => {
  return (
    <div className="rounded-2xl border border-white/10 p-3 shadow-inner">
      <div className="flex items-center overflow-hidden rounded-xl border border-white/20 bg-[#0f0f1a] text-white shadow-md">
        <div className="flex items-center px-3">
          <Search className="h-4 w-4 text-white/50" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent px-2 py-2 text-sm text-white placeholder-white/60 focus:outline-none"
        />
        <button
          type="button"
          className=" bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
