import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { CMS_URL, getSmallestImageNotThumbnail } from "@/lib/utils";
import { Media } from "@/models/media";
import { PopulatedProject } from "@/models/projects";
import { PopulatedTechnology } from "@/models/technology";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type MappedTechnology = {
  id: string;
  tecnologia: PopulatedTechnology;
};

interface ProjectCardProps {
  name: string;
  subtitle: string;
  systemType: string;
  slug: string;
  stack: Array<MappedTechnology>;
  thumbnail: Media;
  project: PopulatedProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const projectImage = getSmallestImageNotThumbnail(props.thumbnail);

  return (
    <div className="flex w-full justify-center rounded-2xl gradient-border md:max-w-96">
      <div className="flex h-full w-full flex-col gap-2 rounded-[15px] bg-muted p-2 pb-3">
        <div className="relative flex aspect-square w-full justify-center overflow-hidden rounded-[7px]">
          <Image
            fill
            src="/lines.png"
            alt="Cuadrícula de fondo"
            className="object-cover"
            loading="lazy"
          />
          <Image
            fill
            src={`${CMS_URL}${projectImage.url}`}
            alt={props.thumbnail.alt}
            className="z-10 object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-bold">{props.name}</h3>
        <div className="line-clamp-2 h-12 justify-between text-base font-normal">
          <span>{props.subtitle}</span>
        </div>
        <hr className="border border-primary" />
        <div className="flex items-center justify-between">
          <div className="align-text-bottom text-sm">{props.systemType}</div>
          <div className="flex items-center gap-2">
            {props.stack.slice(0, 4).map((tech) => (
              <Tooltip key={tech.id}>
                <TooltipTrigger>
                  <Image
                    src={`${CMS_URL}${tech.tecnologia.logo_monocromatico.url}`}
                    alt={tech.tecnologia.logo.alt}
                    className="size-5"
                    width={32}
                    height={32}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.tecnologia.nombre}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <Button asChild>
            <Link href={`/proyectos/${props.slug}`}>Ver más</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
