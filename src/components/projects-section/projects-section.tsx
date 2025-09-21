import { API_URL } from "@/lib/utils";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";

import { PopulatedProject } from "../../models/projects";
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
  const projectsRes = await fetch(`${API_URL}/proyectos`, {
    cache: "no-store",
  });

  if (!projectsRes.ok) {
    return generateEmptyResponse();
  }

  const ProjectsResponse = createResponseSchema(PopulatedProject);

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
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-white/90 to-transparent dark:from-muted lg:block" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-white/90 to-transparent dark:from-muted lg:block" />
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
      </div>
      <CarouselPrevious className="left-2 top-[45%] z-10 hidden size-11 disabled:hidden sm:inline-flex" />
      <CarouselNext className="right-2 top-[45%] z-10 hidden size-11 disabled:hidden sm:inline-flex" />
      <CarouselNavigation name="Projects" />
    </Carousel>
  );
}
