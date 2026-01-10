import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CMS_URL, getSmallestImageNotThumbnail } from "@/lib/utils";
import { PopulatedProject } from "@/models/projects";

import { ProjectStatusBadge } from "../projects-section/project-status";
import { extractPlainText } from "../rich-text/converters/plaintext";
import { CsiproLogo } from "../socials/logos/csipro-logo";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const MAX_MEMBERS_DISPLAYED = 5;

interface ProjectCardProps {
  project: PopulatedProject;
}

export default function ProjectCardTemp({ project }: ProjectCardProps) {
  const initialDate = format(new Date(project.fecha_inicio), "dd/MM/yyyy");
  const finishDate = project.fecha_termino
    ? format(new Date(project.fecha_termino), "PPP", { locale: es })
    : null;
  const members = project.participantes ?? [];

  const projectImage = getSmallestImageNotThumbnail(project.imagen_principal);

  const plainTextDescription = extractPlainText({
    data: project.descripcion,
  });

  return (
    <div className="w-full rounded-2xl bg-[#160D2A]/90 p-2 pb-3 text-white shadow-lg md:w-80 lg:w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar />
          <span className="text-sm">{initialDate}</span>
        </div>
        <Tooltip>
          <TooltipTrigger disabled={!finishDate}>
            <ProjectStatusBadge
              status={project.estado}
              size="sm"
              weight="medium"
              className="rounded-lg"
            />
          </TooltipTrigger>
          {finishDate && (
            <TooltipContent>
              <p>{`Finalizado el ${finishDate}.`}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </div>

      <div className="py-1" />
      <div className="h-[1px] w-full rounded-full bg-[#2D1B55]/90"></div>
      <div className="py-1" />

      <div className="flex flex-row gap-2 md:flex-col">
        <div className="relative size-44 overflow-hidden rounded-lg md:w-full">
          <Image
            src={`${CMS_URL}${projectImage.url}`}
            alt={project.imagen_principal.alt}
            className="h-full w-full object-cover"
            width={176}
            height={192}
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2">
          <div>
            <div className="flex items-start gap-2">
              <h3 className="line-clamp-2 font-bold">{project.nombre}</h3>
            </div>
            <p className="text-sm font-semibold text-[#A1A1AA]">
              {project.subtitulo}
            </p>
            <div className="min-h-16">
              {project.descripcion ? (
                <p className="line-clamp-[5] text-sm lg:line-clamp-3">
                  {plainTextDescription}
                </p>
              ) : (
                <p className="select-none text-sm italic text-stone-400">
                  No hay descripción disponible.
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="size-5">
              {project.logo ? (
                <Image
                  src={`${CMS_URL}${project.logo.url}`}
                  alt={project.logo.alt}
                  width={32}
                  height={32}
                />
              ) : (
                <CsiproLogo className="fill-white pt-1" />
              )}
            </div>
            <p className="text-end text-sm font-semibold text-[#A1A1AA]">
              {project.tipo_sistema}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-end justify-end pt-4">
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center gap-2 text-gray-400">
            <Users size={20} />
            <span>{members.length} miembros</span>
          </div>
          <div className="flex flex-wrap gap-2 pb-1">
            {members.slice(0, MAX_MEMBERS_DISPLAYED).map((member, idx) => {
              const memberImage = getSmallestImageNotThumbnail(
                member.miembro.foto,
              );

              const thumbnail = member.miembro.foto.sizes?.thumbnail?.url
                ? member.miembro.foto.sizes.thumbnail
                : memberImage;

              return (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <Link
                      href={`/miembros/${member.miembro.slug}`}
                      aria-label={member.miembro.short_name}
                      className="size-7 overflow-hidden rounded-full"
                    >
                      <Image
                        src={`${CMS_URL}${thumbnail.url}`}
                        alt={member.miembro.foto.alt}
                        className="h-full w-full object-cover"
                        width={28}
                        height={28}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{member.miembro.short_name}</TooltipContent>
                </Tooltip>
              );
            })}
            {members.length > MAX_MEMBERS_DISPLAYED && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs text-white">
                    +{members.length - MAX_MEMBERS_DISPLAYED}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-64">
                  <p>
                    {new Intl.ListFormat("es", {
                      style: "long",
                      type: "conjunction",
                    }).format([
                      ...members
                        .slice(MAX_MEMBERS_DISPLAYED)
                        .map((m) => m.miembro.short_name),
                    ])}
                    .
                  </p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="">
          <Button asChild>
            <Link href={`/proyectos/${project.slug}`}>Ver más</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
