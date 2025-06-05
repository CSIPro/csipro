"use client";

import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export interface SectionPaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage?: number | null;
  prevPage?: number | null;
  scrollId?: string; // ID of the element to scroll to after pagination change
  className?: string;
}

export const SectionPagination: FC<SectionPaginationProps> = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  scrollId,
  className,
}) => {
  const searchParams = useSearchParams();

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    // Ensure this effect runs only after the first render
    if (firstRender) {
      setFirstRender(false);
      return;
    }

    if (scrollId) {
      const params = new URLSearchParams(searchParams.toString());

      if (params.get("page")) {
        document.getElementById(scrollId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollId, searchParams]);

  const createQueryString = (page: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);

    return "?" + params.toString();
  };

  const prevPageUrl =
    prevPage && prevPage > 0 ? createQueryString(prevPage.toString()) : "#";

  const nextPageUrl =
    nextPage && nextPage <= totalPages
      ? createQueryString(nextPage.toString())
      : "#";

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={prevPageUrl}
            disabled={prevPageUrl.includes("#")}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem
            key={`Pagination index: ${index + 1} - total: ${totalPages}`}
          >
            <PaginationLink
              isActive={index + 1 === currentPage}
              href={createQueryString((index + 1).toString())}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={nextPageUrl}
            disabled={nextPageUrl.includes("#")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
