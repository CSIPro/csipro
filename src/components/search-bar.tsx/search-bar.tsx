"use client";

import { Search } from "lucide-react";
import { FC, useEffect, useState } from "react";

import { Button } from "../ui/button";

interface SearchBarProps {
  shortPlaceholder?: string;
  longPlaceholder?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  shortPlaceholder = "Buscar en página...",
  longPlaceholder = "Buscar contenido en la página...",
}) => {
  const [placeholder, setPlaceholder] = useState(shortPlaceholder);
  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 1024) {
        setPlaceholder(longPlaceholder);
      } else {
        setPlaceholder(shortPlaceholder);
      }
    };

    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, [shortPlaceholder, longPlaceholder]);

  return (
    <div className="p-4">
      <div className="rounded-2xl border border-[#281D3A] p-3 shadow-inner lg:p-4">
        <div className="flex items-center overflow-hidden rounded-xl border border-white/20 bg-[#0f0f1a] text-white shadow-md">
          <div className="flex items-center px-3">
            <Search className="h-4 w-4 text-white/50" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-transparent px-2 py-2 text-sm text-white placeholder-white/60 focus:outline-none"
          />
          <Button className="rounded-l-none bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors">
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};
