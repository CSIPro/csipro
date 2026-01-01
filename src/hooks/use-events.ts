import {
  QueryOptions,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/utils";
import { PopulatedPaginatedEventsResponse } from "@/models/events";
import { fetchPopulatedEvents } from "@/services/events";

interface UseEventsProps {
  limit?: number;
  currentPage?: number;
  queryOptions?: QueryOptions<PopulatedPaginatedEventsResponse>;
}

export const usePopulatedEvents = ({
  limit = 6,
  currentPage = 1,
  queryOptions,
}: UseEventsProps) => {
  return useQuery({
    ...queryOptions,
    queryKey: [QUERY_KEYS.POPULATED_EVENTS, { limit, currentPage }],
    queryFn: () => fetchPopulatedEvents(limit, currentPage),
  });
};

interface UseInfiniteEventsProps {
  limit?: number;
  initialData?: PopulatedPaginatedEventsResponse;
}

export const useInfinitePopulatedEvents = ({
  limit = 6,
  initialData,
}: UseInfiniteEventsProps) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.POPULATED_EVENTS_INFINITE, { limit }],
    queryFn: ({ pageParam = 1 }) => {
      return fetchPopulatedEvents(limit, pageParam);
    },
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
