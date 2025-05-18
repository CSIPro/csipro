import React, { FC } from "react";

interface Props {
  filters: Array<{
    name: string;
    type: string;
    href?: string;
  }>;
}

export const DefaultFilters: FC<Props> = (props) => {
  return (
    <div className="flex gap-2">
      {props.filters.map((filter) =>
        filter.type === "button" ? (
          <button
            className="rounded-3xl border border-[#9870F4] bg-[#4600E5]/10 px-6 py-2 text-[#9870F4] hover:bg-[#7145D6] hover:text-white"
            key={filter.name}
            type={filter.type}
          >
            {filter.name}
          </button>
        ) : (
          <a key={filter.name} href={filter.href}>
            {filter.name}
          </a>
        ),
      )}
    </div>
  );
};
