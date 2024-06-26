"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function EventsPagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (limit: string, page: string) => {
      const params = new URLSearchParams();
      params.set("limit", limit);
      params.set("page", page);
      console.log(params.toString());
      return pathname + "?" + params.toString();
    },
    [searchParams],
  );
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={createQueryString("3", "1")}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={createQueryString("3", "2")}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
