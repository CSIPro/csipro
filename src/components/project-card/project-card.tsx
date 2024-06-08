import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Technology } from "@/models/technology";

type MappedTechnology = {
  id: string;
  tecnologia: Technology;
};

interface ProjectCardProps {
  name: string;
  systemType: string;
  description?: string;
  stack: Array<MappedTechnology>;
  principalImage: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="flex w-full max-w-md justify-center rounded-2xl gradient-border">
      <div className="h-full w-full rounded-[15px] bg-muted p-4">
        <div className="relative flex h-72 w-full justify-center md:h-48">
          <Image fill src="/lines.png" alt="pic" className="object-cover" />
          <Image
            fill
            src={`https://admin.csipro.isi.unison.mx${props.principalImage}`}
            alt="principal_image"
            className="z-10 object-contain"
          />
        </div>
        <div className="py-2"></div>
        <div className="text-2xl font-bold">{props.name}</div>
        <div className="flex h-14 items-center justify-between text-base font-normal">
          <span>{props.description ?? "Lorem ipsum dolor sit amet"}</span>
        </div>
        <div className="py-2"></div>
        <hr className="border-1 border-primary" />
        <div className="py-2"></div>
        <div className="flex items-center justify-between">
          <div className="align-text-bottom text-sm">{props.systemType}</div>
          <div className="flex gap-2">
            {props.stack.map((tech) => (
              <Image
                key={tech.id}
                src={`https://admin.csipro.isi.unison.mx${props.principalImage}`}
                alt={`Technology ${tech.tecnologia.nombre}`}
                className="h-3 w-3"
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
