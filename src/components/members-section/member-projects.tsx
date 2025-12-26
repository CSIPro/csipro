import { getMemberProjects } from "@/services/members";

import { ProjectCard } from "../project-card/project-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface Props {
  memberId: number;
}

export default async function MemberProjects({ memberId }: Props) {
  const memberProjects = await getMemberProjects(memberId);

  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {memberProjects.docs.map((project) => (
          <CarouselItem
            key={project.id}
            className="basis-5/6 sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/3"
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
    </Carousel>
  );
}
