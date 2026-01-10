import { API_URL } from "@/lib/utils";
import { generateEmptyResponse } from "@/models/cms-response";
import {
  PopulatedPaginatedProjectsResponse,
  PopulatedProject,
  ProjectsCount,
} from "@/models/projects";

export const fetchProject = async (slug: string) => {
  const projectRes = await fetch(
    `${API_URL}/proyectos?depth=2&where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    {
      next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
    },
  );

  if (!projectRes.ok) {
    return null;
  }

  const projectsData = await projectRes.json();
  const projectsParse =
    PopulatedPaginatedProjectsResponse.safeParse(projectsData);

  if (!projectsParse.success) {
    console.log(projectsParse.error.format());

    for (const err of projectsParse.error.errors) {
      console.error(err);
    }

    return null;
  }

  const projectData = projectsParse.data.docs[0];

  if (!projectData) {
    return null;
  }

  return projectData;
};

export const fetchProjectById = async (id: number) => {
  const projectRes = await fetch(`${API_URL}/proyectos/${id}?depth=2`, {
    next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
  });

  if (!projectRes.ok) {
    return null;
  }

  const projectData = await projectRes.json();
  const projectParse = PopulatedProject.safeParse(projectData);

  if (!projectParse.success) {
    console.log(projectParse.error.format());

    for (const err of projectParse.error.errors) {
      console.error(err);
    }

    return null;
  }

  return projectParse.data;
};

export const fetchPopulatedProjects = async (
  limit: number,
  currentPage: number,
) => {
  const projectRes = await fetch(
    `${API_URL}/proyectos?depth=2&limit=${limit}&page=${currentPage}`,
    {
      next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
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
    next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
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
