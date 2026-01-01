"use client";

import { useOnInView } from "react-intersection-observer";

import { useInfinitePopulatedProjects } from "@/hooks/use-projects";
import { PopulatedPaginatedProjectsResponse } from "@/models/projects";

import ProjectCardTemp from "../project-card-temp/project-card-temp";

interface Props {
  limit?: number;
  initialData?: PopulatedPaginatedProjectsResponse;
}

export const InfiniteProjects = ({ limit, initialData }: Props) => {
  const infiniteProjects = useInfinitePopulatedProjects({ limit, initialData });
  const trackingRef = useOnInView(
    (inView) => {
      if (
        inView &&
        infiniteProjects.hasNextPage &&
        !infiniteProjects.isFetchingNextPage
      ) {
        infiniteProjects.fetchNextPage();
      }
    },
    { threshold: 0.5 },
  );

  return (
    <ul className="grid w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {infiniteProjects.data?.pages.map((page) =>
        page.docs.map((project) => (
          <li key={project.id}>
            <ProjectCardTemp project={project} />
          </li>
        )),
      )}
      <div ref={trackingRef} />
    </ul>
  );
};
