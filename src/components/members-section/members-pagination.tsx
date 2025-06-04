"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface MembersPaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage?: number | null;
  prevPage?: number | null;
}

export const MembersPagination: FC<MembersPaginationProps> = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
}) => {
  const pathname = usePathname();

  const createQueryString = (page: string) => {
    const params = new URLSearchParams();
    params.set("page", page);

    return pathname + "?" + params.toString();
  };

  const prevPageUrl =
    prevPage && prevPage > 0 ? createQueryString(prevPage.toString()) : "#";

  const nextPageUrl =
    nextPage && nextPage <= totalPages
      ? createQueryString(nextPage.toString())
      : "#";

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={prevPageUrl}
              disabled={prevPageUrl.includes("#")}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={`Members page item ${index + 1}`}>
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
    </>
  );
};
