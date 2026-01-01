import { QueryOptions, useQuery } from "@tanstack/react-query";

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
