"use client";

import { usePopulatedProjects } from "@/hooks/use-projects";
import { PopulatedPaginatedProjectsResponse } from "@/models/projects";

import { ProjectCard } from "../project-card/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

interface Props {
  initialData?: PopulatedPaginatedProjectsResponse;
}

export const ProjectsCarousel = ({ initialData }: Props) => {
  const populatedProjects = usePopulatedProjects({
    queryOptions: { initialData },
  });

  if (populatedProjects.isLoading) {
    return <ProjectsCarouselSkeleton />;
  }

  if (!populatedProjects.data) {
    return (
      <div className="flex h-64 w-full items-center justify-center px-4">
        <p>No es posible cargar los proyectos en este momento.</p>
      </div>
    );
  }

  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {populatedProjects.data.docs.map((project) => (
          <CarouselItem
            key={project.id}
            className="basis-[90%] sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/4"
          >
            <ProjectCard
              name={project.nombre}
              subtitle={project.subtitulo}
              slug={project.slug}
              systemType={project.tipo_sistema}
              stack={project.tecnologias ?? []}
              thumbnail={project.imagen_principal}
              project={project}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation name="projects-carousel" />
    </Carousel>
  );
};

export const ProjectsCarouselSkeleton = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {[1, 2, 3].map((index) => (
          <CarouselItem
            key={index}
            className="basis-[90%] sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/4"
          >
            <Skeleton className="h-96 w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
