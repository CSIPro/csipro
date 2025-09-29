import { API_URL } from "@/lib/utils";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { PopulatedProject } from "@/models/projects";

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
    console.log(projects.error);
    return generateEmptyResponse();
  }

  return projects.data;
};
