/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  name: string;
  system_type: string;
  description: string;
  technology: string[];
  principal_image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div>
      <div className="h-96 w-80 rounded-2xl p-4 sm:max-w-80">
        <div className="relative h-72 w-full overflow-hidden md:h-48">
          <Image
            fill
            src={"lines.png"}
            alt="pic"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="py-2"></div>
        <div className="text-2xl font-bold">{props.name}</div>
        <div className="flex h-14 items-center justify-between text-base font-normal">
          <span>{props.description}</span>
        </div>
        <hr className="border-1 my-4 border-primary" />
        <div className="flex justify-between">
          <div className="align-text-bottom text-sm">{props.system_type}</div>
          <div className="flex">
            {props.technology.map((tech) => (
              <img
                key={tech}
                src={`assets/technologies/${tech}.svg`}
                alt={tech}
                className="m-2 h-3 w-3"
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline">Ver más</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
