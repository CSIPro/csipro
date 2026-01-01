import { API_URL } from "@/lib/utils";
import { generateEmptyResponse } from "@/models/cms-response";
import {
  PopulatedPaginatedProjectsResponse,
  ProjectsCount,
} from "@/models/projects";

export const fetchPopulatedProjects = async (
  limit: number,
  currentPage: number,
) => {
  const projectRes = await fetch(
    `${API_URL}/proyectos?depth=2&limit=${limit}&page=${currentPage}`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!projectRes.ok) {
    return generateEmptyResponse();
  }

  const projectsData = await projectRes.json();

  const projects = PopulatedPaginatedProjectsResponse.safeParse(projectsData);

  if (!projects.success) {
    console.log(projects.error.format());
    return generateEmptyResponse();
  }

  return projects.data;
};

export const countProjects = async () => {
  const countRes = await fetch(`${API_URL}/proyectos/count`, {
    next: { revalidate: 600 },
  });

  if (!countRes.ok) {
    return { active: 0, inactive: 0, finished: 0 };
  }

  const countsData = await countRes.json();

  const countsParse = ProjectsCount.safeParse(countsData);

  if (!countsParse.success) {
    console.log(countsParse.error.format());
    return { active: 0, inactive: 0, finished: 0 };
  }

  return countsParse.data;
};
