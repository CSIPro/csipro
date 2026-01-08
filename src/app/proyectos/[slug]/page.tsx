import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ImageGallery } from "@/components/image-gallery/image-gallery";
import { Navbar } from "@/components/navbar/navbar";
import { ProjectParticipantCard } from "@/components/project-participants/project-participant-card";
import { RichText } from "@/components/rich-text/rich-text";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { CsiproLogo } from "@/components/socials/logos/csipro-logo";
import { TechChip } from "@/components/tech-chip/tech-chip";
import { CMS_URL, getSmallestImageNotThumbnail } from "@/lib/utils";
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

  return (
    <>
      <Navbar titles={["DEVS", "TECH", "PROJECTS"]} />
      <main className="w-full">
        <Section innerClassName="pb-8">
          <div className="relative h-[28rem] w-full overflow-hidden lg:h-[40rem]">
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
                className="absolute h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background">
              <div className="relative z-10 flex h-full w-full flex-col items-start justify-end gap-2 px-4">
                <div className="flex w-full items-end gap-2">
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
                  <h1 className="flex-1 text-pretty text-4xl font-bold tracking-wide">
                    {project.nombre}
                  </h1>
                </div>
                <div className="flex w-full items-center justify-center rounded-xl border-2 border-primary-light bg-[#1D0B47] py-2">
                  <span className="text-center text-lg font-bold uppercase tracking-wider text-primary-light">
                    {project.estado}
                  </span>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-1 text-base uppercase text-stone-400">
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
          <div className="w-full px-4">
            <span className="block h-px w-full bg-primary"></span>
          </div>
        </Section>
        <Section innerClassName="pb-8">
          <div className="flex w-full flex-col gap-2 px-4">
            <ImageGallery
              gallery={gallery}
              identifier={`Galería de ${project.nombre}`}
              className="aspect-[4/3] h-auto w-full"
              imageClassName="rounded-md object-contain"
            />
          </div>
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
        <Section innerClassName="pb-8">
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
        <Section innerClassName="pb-8">
          <SectionTitle>Equipo</SectionTitle>
          <div className="w-full px-4">
            <ul className="grid w-full grid-cols-1 gap-2">
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
      </main>
    </>
  );
}
