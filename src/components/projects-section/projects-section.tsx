import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";

import { Project } from "../../models/projects";
import { ProjectCard } from "../project-card/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const fetchProjects = async () => {
  const projectsRes = await fetch(
    "https://admin.csipro.isi.unison.mx/api/proyectos",
    {
      cache: "no-store",
    },
  );

  if (!projectsRes.ok) {
    return generateEmptyResponse();
  }

  const ProjectsResponse = createResponseSchema(Project);

  const projectsData = await projectsRes.json();

  const projects = ProjectsResponse.safeParse(projectsData);
  if (!projects.success) {
    console.log(projects.error);
    return generateEmptyResponse();
  }
  return projects.data;
};

export default async function ProjectsSection() {
  const projectsRes = await fetchProjects();

  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {projectsRes.docs.map((project) => (
          <CarouselItem
            key={project.id}
            className="basis-5/6 sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-[30%]"
          >
            <ProjectCard
              key={project.id}
              name={project.nombre}
              subtitle={project.subtitulo}
              systemType={project.tipo_sistema}
              stack={project.tecnologias ?? []}
              thumbnail={project.imagen_principal}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 top-[45%] hidden size-11 disabled:hidden sm:inline-flex" />
      <CarouselNext className="right-0 top-[45%] hidden size-11 disabled:hidden sm:inline-flex" />
      <CarouselNavigation name="Projects" />
    </Carousel>
  );
}
