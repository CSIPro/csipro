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
    <div className="flex w-full gap-2 max-sm:justify-start">
      {props.filters.map((filter) =>
        filter.type === "button" ? (
          <button
            className="rounded-3xl border border-[#9870F4] bg-[#4600E5]/10 text-[#9870F4] hover:bg-[#7145D6] hover:text-white max-md:p-3 max-sm:rounded-2xl max-sm:text-xs md:px-6 md:py-2"
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
