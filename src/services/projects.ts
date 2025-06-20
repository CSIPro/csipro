import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Project } from "@/models/projects";

export const fetchProjects = async (limit: number, currentPage: number) => {
  const projectRes = await fetch(
    `https://admin.csipro.isi.unison.mx/api/proyectos?limit=${limit}&page=${currentPage}`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!projectRes.ok) {
    return generateEmptyResponse();
  }

  const ProjectResponse = createResponseSchema(Project);

  const projectsData = await projectRes.json();

  const projects = ProjectResponse.safeParse(projectsData);

  if (!projects.success) {
    console.log(projects.error);
    return generateEmptyResponse();
  }

  return projects.data;
};
