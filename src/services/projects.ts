import { API_URL } from "@/lib/utils";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { PopulatedProject, ProjectsCount } from "@/models/projects";

export const fetchProjects = async (limit: number, currentPage: number) => {
  const projectRes = await fetch(
    `${API_URL}/proyectos?limit=${limit}&page=${currentPage}`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!projectRes.ok) {
    return generateEmptyResponse();
  }

  const ProjectResponse = createResponseSchema(PopulatedProject);

  const projectsData = await projectRes.json();

  const projects = ProjectResponse.safeParse(projectsData);

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
