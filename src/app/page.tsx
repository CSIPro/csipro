import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { EventsCarousel } from "@/components/events-section/events-carousel";
import { Glow, GlowContainer } from "@/components/glow/glow";
import { HeroCard } from "@/components/hero-carousel/hero-card";
import { HeroCarousel } from "@/components/hero-carousel/hero-carousel";
import { Navbar } from "@/components/navbar/navbar";
import { ProjectsCarousel } from "@/components/projects-section/projects-carousel";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import {
  SummaryChips,
  SummaryChipsSkeleton,
} from "@/components/summary-chips/summary-chips";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fetchPopulatedEvents } from "@/services/events";
import { fetchPopulatedProjects } from "@/services/projects";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const [populatedEvents, populatedProjects] = await Promise.all([
    fetchPopulatedEvents(6, Number(searchParams?.page) || 1),
    fetchPopulatedProjects(6, Number(searchParams?.page) || 1),
  ]);

  const simpleImages = [
    {
      id: 1,
      url: "/landing-hero/csipro-reboot-2023-og.jpg",
      alt: "Paula Romero en el CSI PRO REBOOT 2023.",
    },
  ];

  const srcSetImages = [
    {
      id: 2,
      fileName: "og-team",
      path: "/creative-team/og-team",
      alt: "Equipo original de CSI PRO Website (2024).",
      className: "",
    },
    {
      id: 3,
      fileName: "braintive-2024-1",
      path: "/landing-hero/braintive",
      alt: "Equipo de CSI PRO BrainTive en 2024.",
      className: "-translate-y-12",
    },
    {
      id: 4,
      fileName: "miembros-csipro-gen-2020-2025",
      path: "/landing-hero/gen-2020-2025",
      alt: "Miembros de CSI PRO de la generación 2020-2025.",
      className: "-translate-y-28",
    },
    {
      id: 5,
      fileName: "miembros-csipro-gen-2017-2024",
      path: "/landing-hero/gen-2017-2024",
      alt: "Miembros de CSI PRO de la generación 2017-2024.",
      className: "",
    },
  ];

  return (
    <>
      <Navbar titles={["BIENVENIDOS", "REBOOT", "HOME"]} />
      <main>
        <Section>
          <div className="absolute inset-0 -z-10 size-full overflow-hidden">
            <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-80 "></div>
            <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[28rem]"></div>
            <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[36rem]"></div>
            <div className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[44rem]"></div>
            <div className="absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[52rem]"></div>
          </div>

          <GlowContainer>
            {/* Basic usage */}
            <Glow
              breathe
              className="bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_62%)]"
            />
            {/* Overlayed glows within a group */}
            {/*<GlowGroup turn>
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(123,30,114,1)_100%);] [clip-path:circle(50%_at_50%_50%)]" />
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(49,0,163,1)_57%);] [clip-path:polygon(26%_10%,_49%_52%,_96%_56%,_93%_70%,_85%_80%,_77%_85%,_68%_90%,_58%_94%,_49%_94%,_38%_91%,_28%_87%,_18%_79%,_14%_71%,_8%_63%,_6%_55%,_7%_43%,_11%_31%,_15%_21%)]" />
          </GlowGroup>*/}
          </GlowContainer>

          <div className="px-4 pt-10 sm:pb-4 sm:pt-12">
            <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
              Un espacio de <span className="text-primary">desarrollo</span>,
              <br />
              <span className="text-primary"> innovación</span> &
              <span className="text-primary "> investigación</span>
              <br />
              <span className="text-xl font-semibold sm:text-4xl ">
                en la Universidad de Sonora
              </span>
            </h1>
          </div>
          {/* <Button className="px-4 py-4 font-bold uppercase sm:rounded-2xl sm:px-5 sm:py-7 sm:text-2xl ">
            Get Started
          </Button> */}
          <div className="sm:py-1"></div>

          <HeroCarousel images={[...simpleImages, ...srcSetImages]}>
            {simpleImages.map((img) => (
              <HeroCard key={`heroCard ${img.id}`} imageId={img.id}>
                <Image
                  src={img.url}
                  width={1200}
                  height={400}
                  alt={img.alt}
                  className="object-cover"
                  loading="eager"
                />
              </HeroCard>
            ))}
            {srcSetImages.map((img) => (
              <HeroCard key={`heroCard ${img.id}`} imageId={img.id}>
                <picture>
                  <source
                    srcSet={`${img.path}/${img.fileName}-hero.webp`}
                    media="(min-width: 2000px)"
                    type="image/webp"
                  />
                  <source
                    srcSet={`${img.path}/${img.fileName}-large.webp`}
                    media="(min-width: 1800px)"
                    type="image/webp"
                  />
                  <source
                    srcSet={`${img.path}/${img.fileName}-medium.webp`}
                    media="(min-width: 1000px)"
                    type="image/webp"
                  />
                  <source
                    srcSet={`${img.path}/${img.fileName}-small.webp`}
                    media="(max-width: 999px)"
                    type="image/webp"
                  />
                  <Image
                    src={`${img.path}/${img.fileName}.webp`}
                    width={1200}
                    height={400}
                    alt={img.alt}
                    className={cn("object-cover", img.className)}
                    loading="eager"
                  />
                </picture>
              </HeroCard>
            ))}
          </HeroCarousel>
          <div className="py-7 sm:py-12"></div>
        </Section>

        <Section>
          <SectionTitle>NOSOTROS</SectionTitle>
          <GlowContainer>
            <Glow
              className="left-[20%] size-[72vw] bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_90%)] [clip-path:ellipse(50%_50%_at_50%_50%)] md:top-[35%] md:size-[64vw] lg:top-[40%] lg:size-[48vw] xl:left-[8%] xl:top-[50%] xl:size-[36vw] 2xl:left-[10%]"
              size="small"
            />
          </GlowContainer>
          <div className="flex w-full flex-col items-center gap-5 px-2 pb-4 md:flex-row md:gap-6 md:pb-12 lg:gap-16">
            <div className="relative aspect-[3/4] h-fit w-full md:aspect-[1/1]">
              <picture>
                <source
                  srcSet="/nosotros/everyone/everyone-hero.webp"
                  media="(min-width: 1800px)"
                  type="image/webp"
                />
                <source
                  srcSet="/nosotros/everyone/everyone-large.webp"
                  media="(min-width: 1400px)"
                  type="image/webp"
                />
                <source
                  srcSet="/nosotros/everyone/everyone-medium.webp"
                  media="(min-width: 1000px)"
                  type="image/webp"
                />
                <source
                  srcSet="/nosotros/everyone/everyone-small.webp"
                  media="(min-width: 600px)"
                  type="image/webp"
                />
                <source
                  srcSet="/nosotros/everyone/everyone-small.webp"
                  media="(max-width: 599px)"
                  type="image/webp"
                />
                <Image
                  src="/nosotros/everyone/everyone.webp"
                  fill
                  alt="Miembros de CSI PRO al 2024."
                  className="rounded-3xl md:rounded-2xl md:object-cover md:object-[50%_15%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="flex w-full flex-col items-center gap-5 md:items-start">
              <Suspense fallback={<SummaryChipsSkeleton />}>
                <SummaryChips />
              </Suspense>
              <h3 className="text-center font-poppins text-3xl">
                ¿Quiénes somos?
              </h3>
              <p className="text-pretty text-base">
                Somos estudiantes de la{" "}
                <span className="text-primary-light">
                  Universidad de Sonora
                </span>{" "}
                en búsqueda de innovar. Nos dedicamos al desarrollo de proyectos
                de software con el propósito de{" "}
                <span className="text-primary-light">
                  aprender y beneficiar
                </span>{" "}
                tanto a los integrantes del laboratorio, como a la comunidad
                universitaria.
              </p>
              <p className="text-pretty text-base">
                Nuestro objetivo es fomentar un espacio donde los estudiantes
                pueden{" "}
                <span className="text-primary-light">
                  obtener experiencia práctica
                </span>{" "}
                más allá de lo que se ofrece en las aulas, promoviendo la{" "}
                <span className="text-primary-light">
                  colaboración, la creatividad, y el crecimiento
                </span>{" "}
                tanto personal como profesional.
              </p>
              <p className="text-pretty text-base">
                Desde 2014, hemos sido testigos del impacto positivo que{" "}
                <strong className="text-primary-light">CSI PRO</strong> ha
                tenido en sus integrantes y en la comunidad universitaria, dando
                renombre a todos aquellos que han formado parte de este espacio
                e{" "}
                <span className="text-primary-light">
                  impulsando el interés
                </span>{" "}
                de los estudiantes en la tecnología.
              </p>

              <Button className="text-base" asChild>
                <Link href="/nosotros" prefetch>
                  Más de nosotros
                </Link>
              </Button>
            </div>
          </div>
        </Section>

        {/* <EventsSection limit={limit} currentPage={currentPage} pageLimit={2} /> */}
        <Section>
          <div className="flex w-full items-center justify-between pr-4">
            <SectionTitle>Eventos</SectionTitle>
            <Button className="hidden uppercase sm:inline-flex" asChild>
              <Link href="/eventos" prefetch>
                Ver todos
              </Link>
            </Button>
          </div>
          <EventsCarousel initialData={populatedEvents} />
          <Button className="uppercase sm:hidden" asChild>
            <Link href="/eventos" prefetch>
              Ver todos
            </Link>
          </Button>
        </Section>
        <Section innerClassName="pb-16">
          <div className="flex w-full items-center justify-between pr-4">
            <SectionTitle>Nuestros proyectos</SectionTitle>
            <Button asChild className="hidden uppercase sm:inline-flex">
              <Link href="/proyectos" prefetch>
                Ver todos
              </Link>
            </Button>
          </div>
          <ProjectsCarousel initialData={populatedProjects} />
          <Button asChild className="uppercase sm:hidden">
            <Link href="/proyectos" prefetch>
              Ver todos
            </Link>
          </Button>
        </Section>
      </main>
    </>
  );
}
