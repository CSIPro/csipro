import { format } from "date-fns";
import {
  Bug,
  Calendar,
  FileCode,
  GitBranch,
  Globe,
  LayoutGrid,
  LinkIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ImageGallery } from "@/components/image-gallery/image-gallery";
import { Navbar } from "@/components/navbar/navbar";
import { ProjectParticipantCard } from "@/components/project-participants/project-participant-card";
import { ProjectLink } from "@/components/projects-section/project-link";
import { RichText } from "@/components/rich-text/rich-text";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { CsiproLogo } from "@/components/socials/logos/csipro-logo";
import { TechChip } from "@/components/tech-chip/tech-chip";
import { CMS_URL, getSmallestImageNotThumbnail } from "@/lib/utils";
import { ProjectLink as ProjectLinkType } from "@/models/projects";
import { fetchProject } from "@/services/projects";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const project = await fetchProject(params.slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado - CSI PRO",
    };
  }

  return {
    title: `${project.nombre} - CSI PRO`,
    description: project.descripcion
      ? "Descripción del proyecto " + project.nombre
      : "Proyecto desarrollado por CSI PRO",
    keywords: [
      "CSI PRO",
      project.nombre,
      ...project.participantes.map((m) => m.miembro.short_name),
      "Ingeniería de Software",
      "Desarrollo de Software",
      "Proyectos Tecnológicos",
    ],
  };
}

export default async function ProjecPage({ params }: Props) {
  const project = await fetchProject(params.slug);

  if (!project) {
    return notFound();
  }

  const gallery = [
    {
      id: "featured-image",
      imagen: project.imagen_principal,
    },
    ...project["imagenes_secundarias"],
  ];

  const projectLogo = project.logo
    ? (getSmallestImageNotThumbnail(project.logo) ?? project.logo)
    : null;

  const groupedLinks = project.links.reduce(
    (acc, link) => {
      if (!acc[link.type]) {
        acc[link.type] = [];
      }

      acc[link.type].push(link);

      return acc;
    },
    {
      other: [],
      website: [],
      repository: [],
      demo: [],
      application: [],
      docs: [],
    } as Record<ProjectLinkType["type"], ProjectLinkType[]>,
  );

  return (
    <>
      <Navbar titles={["DEVS", "TECH", "PROJECTS"]} />
      <main className="w-full">
        <Section innerClassName="pb-8 lg:border-x-0">
          <div className="relative h-[28rem] w-full overflow-hidden lg:h-[36rem]">
            <picture>
              {project.imagen_principal.sizes?.hero?.url ? (
                <source
                  srcSet={`${CMS_URL}${project.imagen_principal.sizes.hero.url}`}
                  type={
                    project.imagen_principal.sizes.hero.mimeType ?? "image/webp"
                  }
                  media="(min-width: 1200px)"
                />
              ) : null}
              {project.imagen_principal.sizes?.large?.url ? (
                <source
                  srcSet={`${CMS_URL}${project.imagen_principal.sizes.large.url}`}
                  type={
                    project.imagen_principal.sizes.large.mimeType ??
                    "image/webp"
                  }
                  media="(min-width: 1024px)"
                />
              ) : null}
              {project.imagen_principal.sizes?.medium?.url ? (
                <source
                  srcSet={`${CMS_URL}${project.imagen_principal.sizes.medium.url}`}
                  type={
                    project.imagen_principal.sizes.medium.mimeType ??
                    "image/webp"
                  }
                  media="(min-width: 768px)"
                />
              ) : null}
              {project.imagen_principal.sizes?.small?.url ? (
                <source
                  srcSet={`${CMS_URL}${project.imagen_principal.sizes.small.url}`}
                  type={
                    project.imagen_principal.sizes.small.mimeType ??
                    "image/webp"
                  }
                  media="(max-width: 767px)"
                />
              ) : null}
              <Image
                src={`${CMS_URL}${project.imagen_principal.url}`}
                alt={project.imagen_principal.alt}
                width={1400}
                height={1000}
                className="absolute h-full w-full object-cover"
                sizes="100vw"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background">
              <div className="relative z-10 flex h-full w-full flex-col items-start justify-end gap-2 px-4 lg:justify-center">
                <div className="absolute bottom-10 right-20 hidden items-center justify-center rounded-xl border-2 border-primary-light bg-[#1D0B47] px-4 py-2 lg:flex">
                  <span className="text-center text-lg font-bold uppercase tracking-wider text-primary-light">
                    {project.estado}
                  </span>
                </div>
                <div className="absolute bottom-10 left-20 hidden items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-[#BC8DC8]/30 to-[#665097]/30 px-4 py-2 lg:flex">
                  <Calendar />
                  <span className="text-lg font-medium">
                    {format(new Date(project.fecha_inicio), "PPP")}
                  </span>
                </div>
                <div className="flex w-full items-end gap-2 lg:flex-col lg:items-center lg:gap-8 lg:pt-28">
                  <div className="relative flex size-24 shrink-0 items-center justify-center rounded-lg border-4 border-background bg-primary p-2">
                    {projectLogo ? (
                      <Image
                        src={`${CMS_URL}${projectLogo.url}`}
                        alt={project.logo!.alt}
                        width={96}
                        height={96}
                        className="size-full"
                      />
                    ) : (
                      <CsiproLogo className="size-full" />
                    )}
                  </div>
                  <div className="flex-1 lg:flex lg:flex-col lg:items-center lg:gap-2 lg:text-center">
                    <h1 className="text-pretty text-4xl font-bold tracking-wide lg:text-6xl">
                      {project.nombre}
                    </h1>
                    <div className="lg:w-fit lg:rounded-lg lg:bg-gradient-to-r lg:from-primary-light/30 lg:to-[#9E33B9]/30 lg:px-3 lg:py-2">
                      <p className="lg:text-xl">{project.subtitulo}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-xl border-2 border-primary-light bg-[#1D0B47] py-2 lg:hidden">
                  <span className="text-center text-lg font-bold uppercase tracking-wider text-primary-light">
                    {project.estado}
                  </span>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-1 text-base uppercase text-stone-400 lg:hidden">
                  <span>
                    Inicio:{" "}
                    {format(new Date(project.fecha_inicio), "dd/MM/yyyy")}
                  </span>
                  {project.fecha_termino && (
                    <span>
                      - Final:{" "}
                      {format(new Date(project.fecha_termino), "dd/MM/yyyy")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Section>
        <div className="mx-auto grid max-w-9xl grid-cols-1 items-start gap-x-8 lg:grid-cols-3">
          <Section
            innerClassName="pb-8 lg:border-x-0"
            className="lg:col-span-2"
          >
            <SectionTitle>Descripción</SectionTitle>
            <div className="flex w-full flex-col gap-2 px-4">
              {project.descripcion ? (
                <RichText
                  // @ts-expect-error I don't want to type out the Lexical output structure
                  content={project.descripcion}
                  className="space-y-4 text-pretty leading-relaxed"
                />
              ) : (
                <span className="italic text-stone-400/80">
                  No hay descripción disponible.
                </span>
              )}
            </div>
          </Section>
          <Section innerClassName="pb-8 lg:border-x-0">
            <SectionTitle>Tecnologías</SectionTitle>
            <ul className="flex w-full flex-wrap gap-2 px-4">
              {project.tecnologias.map((tech) => (
                <li key={tech.id}>
                  <TechChip icon={tech.tecnologia.logo_monocromatico}>
                    {tech.tecnologia.nombre}
                  </TechChip>
                </li>
              ))}
            </ul>
          </Section>
          <Section
            className="col-span-1 lg:col-span-2"
            innerClassName="pb-8 lg:border-x-0"
          >
            <SectionTitle>Galería</SectionTitle>
            <div className="flex w-full flex-col gap-2 px-4">
              <ImageGallery
                gallery={gallery}
                identifier={`Galería de ${project.nombre}`}
                className="aspect-[5/4] h-auto w-full md:aspect-[2] lg:aspect-[2]"
                carouselClassName="md:basis-1/2 lg:basis-1/2"
                imageClassName="rounded-md object-contain"
              />
            </div>
          </Section>
          <Section innerClassName="pb-8 lg:border-x-0">
            <SectionTitle>Links</SectionTitle>
            <div className="flex w-full flex-col gap-4 px-4 md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap">
              {project.links.length === 0 ? (
                <span className="italic text-stone-400/80">
                  No hay descripción disponible.
                </span>
              ) : null}
              {groupedLinks.website.length > 0 ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-white">
                    <Globe />
                    <h3 className="text-lg font-semibold">Website</h3>
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {groupedLinks.website.map((link) => (
                      <li key={link.id}>
                        <ProjectLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {groupedLinks.repository.length > 0 ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-white">
                    <GitBranch />
                    <h3 className="text-lg font-semibold">Repository</h3>
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {groupedLinks.repository.map((link) => (
                      <li key={link.id}>
                        <ProjectLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {groupedLinks.application.length > 0 ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-white">
                    <LayoutGrid />
                    <h3 className="text-lg font-semibold">Application</h3>
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {groupedLinks.application.map((link) => (
                      <li key={link.id}>
                        <ProjectLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {groupedLinks.docs.length > 0 ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-white">
                    <FileCode />
                    <h3 className="text-lg font-semibold">Docs</h3>
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {groupedLinks.docs.map((link) => (
                      <li key={link.id}>
                        <ProjectLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {groupedLinks.demo.length > 0 ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-white">
                    <Bug />
                    <h3 className="text-lg font-semibold">Demo</h3>
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {groupedLinks.demo.map((link) => (
                      <li key={link.id}>
                        <ProjectLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {groupedLinks.other.length > 0 ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1 text-white">
                    <LinkIcon />
                    <h3 className="text-lg font-semibold">Other</h3>
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {groupedLinks.other.map((link) => (
                      <li key={link.id}>
                        <ProjectLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Section>
          <Section
            className="col-span-full"
            innerClassName="pb-8 lg:border-x-0"
          >
            <SectionTitle>Equipo</SectionTitle>
            <div className="w-full px-4">
              <ul className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {project.participantes.length === 0 && (
                  <span className="col-span-full italic text-stone-400/80">
                    No hay participantes en este proyecto.
                  </span>
                )}
                {project.participantes.map((participant) => (
                  <li key={participant.id}>
                    <ProjectParticipantCard participant={participant} />
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
