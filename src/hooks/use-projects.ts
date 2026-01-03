import {
  QueryOptions,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/utils";
import { PopulatedPaginatedProjectsResponse } from "@/models/projects";
import { fetchPopulatedProjects } from "@/services/projects";

interface UseProjectsProps {
  limit?: number;
  currentPage?: number;
  queryOptions?: QueryOptions<PopulatedPaginatedProjectsResponse>;
}

export const usePopulatedProjects = ({
  limit = 6,
  currentPage = 1,
  queryOptions,
}: UseProjectsProps) => {
  return useQuery({
    ...queryOptions,
    queryKey: [QUERY_KEYS.POPULATED_PROJECTS, { limit, currentPage }],
    queryFn: () => fetchPopulatedProjects(limit, currentPage),
  });
};

interface UseInfiniteProjectsProps {
  limit?: number;
  initialData?: PopulatedPaginatedProjectsResponse;
}

export const useInfinitePopulatedProjects = ({
  limit = 6,
  initialData,
}: UseInfiniteProjectsProps) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.POPULATED_PROJECTS_INFINITE, { limit }],
    queryFn: ({ pageParam = 1 }) => fetchPopulatedProjects(limit, pageParam),
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
