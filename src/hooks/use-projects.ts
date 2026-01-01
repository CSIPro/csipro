import { QueryOptions, useQuery } from "@tanstack/react-query";

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
