import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import * as qs from "qs-esm";

import { API_URL, QUERY_KEYS } from "@/lib/utils";
import {
  PaginatedMembersResponse,
  PopulatedPaginatedMembersResponse,
} from "@/models/members";
import { fetchPopulatedMembers } from "@/services/members";

export const useMemberByName = (shortName: string) => {
  return useQuery({
    queryKey: ["member", shortName],
    queryFn: async () => {
      const query = {
        depth: 1,
        where: {
          short_name: {
            equals: shortName,
          },
        },
      };

      const res = await fetch(`${API_URL}/miembros?${qs.stringify(query)}`);

      if (!res.ok) {
        throw new Error("Failed to fetch member");
      }

      const data = await res.json();

      const dataParse = PaginatedMembersResponse.safeParse(data);

      if (!dataParse.success) {
        console.error(dataParse.error);
        throw new Error("Invalid member data");
      }

      return dataParse.data.docs[0] ? dataParse.data.docs[0] : null;
    },
  });
};

interface UseInfiniteMembersProps {
  limit?: number;
  initialData?: PopulatedPaginatedMembersResponse;
}

export const useInfinitePopulatedMembers = ({
  limit = 6,
  initialData,
}: UseInfiniteMembersProps) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.POPULATED_MEMBERS_INFINITE, { limit }],
    queryFn: ({ pageParam = 1 }) => fetchPopulatedMembers(limit, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const morePagesExist = lastPage.hasNextPage;

      if (!morePagesExist) {
        return undefined;
      }

      return lastPage.nextPage ?? allPages.length + 1;
    },
    initialPageParam: 1,
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [1],
        }
      : undefined,
  });
};
