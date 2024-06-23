import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Media } from "@/models/media";
import { Technology } from "@/models/technology";

type MappedTechnology = {
  id: string;
  tecnologia: Technology;
};

interface ProjectCardProps {
  name: string;
  subtitle: string;
  systemType: string;
  stack: Array<MappedTechnology>;
  thumbnail: Media;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="flex w-full max-w-md justify-center rounded-2xl gradient-border">
      <div className="flex h-full w-full flex-col gap-2 rounded-[15px] bg-muted p-4">
        <div className="relative flex h-64 w-full justify-center md:h-48">
          <Image
            fill
            src="/lines.png"
            alt="Cuadrícula de fondo"
            className="object-cover"
          />
          <Image
            fill
            src={`https://admin.csipro.isi.unison.mx${props.thumbnail.url}`}
            alt={props.thumbnail.alt}
            className="z-10 object-contain"
          />
        </div>
        <div className="text-2xl font-bold">{props.name}</div>
        <div className="line-clamp-2 h-12 justify-between text-base font-normal">
          <span>{props.subtitle}</span>
        </div>
        <hr className="border border-primary" />
        <div className="flex items-center justify-between">
          <div className="align-text-bottom text-sm">{props.systemType}</div>
          <div className="flex items-center gap-2">
            {props.stack.map((tech) => (
              <Image
                key={tech.id}
                src={`https://admin.csipro.isi.unison.mx${tech.tecnologia.logo_monocromatico.url}`}
                alt={tech.tecnologia.logo.alt}
                className="size-5"
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <Button variant="outline">Ver más</Button>
        </div>
      </div>
    </div>
  );
};
