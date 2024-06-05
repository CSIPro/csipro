/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

import {
  BrandingHeader,
  BrandingHeaderHighlight,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";

interface ProjectCardProps {
  name: string;
  system_type: string;
  description: string;
  technology: string[];
  principal_image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="w-full rounded border border-primary bg-[#160D2A] p-4 sm:max-w-80">
      <div className="flex select-none justify-between">
        <BrandingHeader>
          <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
          <BrandingHeaderHighlight>{props.system_type}</BrandingHeaderHighlight>
        </BrandingHeader>
      </div>
      <div className="py-2"></div>
      <h1 className={"select-text text-2xl font-semibold text-white"}>
        {props.name}
      </h1>
      <div className="relative h-72 w-full overflow-hidden rounded">
        <Image
          fill
          src={props.principal_image}
          alt="pic"
          className="object-cover"
          unoptimized
        />
      </div>
      <hr className="border-1 my-4 border-primary" />
      <div className="flex items-center justify-between text-sm font-semibold text-white">
        <span>{props.description}</span>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline">Registrate aquí</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
