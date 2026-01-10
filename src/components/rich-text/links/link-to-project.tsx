import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { CsiproLogo } from "@/components/socials/logos/csipro-logo";
import { CMS_URL, cn, getSmallestImageNotThumbnail } from "@/lib/utils";
import { PopulatedProject } from "@/models/projects";
import { fetchProjectById } from "@/services/projects";

type Props =
  | { project: PopulatedProject; className?: string; children?: ReactNode }
  | { projectId: number; className?: string; children?: ReactNode };

export const LinkToProject = async (props: Props) => {
  const project =
    "project" in props
      ? props.project
      : await fetchProjectById(props.projectId);

  if (!project) {
    return null;
  }

  const logo = project.logo ? getSmallestImageNotThumbnail(project.logo) : null;

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={cn("group inline-block", props.className)}
    >
      <Chip
        variant="white"
        className={cn(
          "gap-1 rounded border-none bg-primary/20 px-0.5 py-0 transition-all duration-300 ease-in-out group-hover:bg-primary/40",
        )}
      >
        <ChipIcon
          className={cn(
            "flex size-4 items-center justify-center overflow-hidden rounded-[2px] bg-primary p-0.5",
          )}
          style={{
            backgroundColor: project.color ?? undefined,
          }}
        >
          {logo ? (
            <Image
              src={`${CMS_URL}${logo.url!}`}
              alt={project.logo?.alt ?? ""}
              width={32}
              height={32}
              className="object-contain"
            />
          ) : (
            <CsiproLogo />
          )}
        </ChipIcon>
        <ChipLabel className="text-base font-medium leading-relaxed">
          {props.children ?? project.nombre}
        </ChipLabel>
      </Chip>
    </Link>
  );
};
