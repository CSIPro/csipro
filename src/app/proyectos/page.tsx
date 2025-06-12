"use client";

import { useEffect, useState, useRef } from "react";

import { Footer } from "@/components/footer/footer";
import { GlowContainer, Glow, GlowGroup } from "@/components/glow/glow";
import { Navbar } from "@/components/navbar/navbar";
import ProjectCardTemp from "@/components/project-card-temp/project-card-temp";
import { SearchBar } from "@/components/search-bar.tsx/search-bar";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  appType: string;
  date: string;
  status: "activo" | "inactivo";
  imageUrl: string;
  logoUrl: string;
  members: { name: string; avatar: string }[];
}

const allProjects: Project[] = Array.from({ length: 100 }, (_, i) => ({
  title: `Proyecto ${i + 1}`,
  subtitle: `Subtitulo del proyecto ${i + 1}`,
  description: `Descripción del proyecto ${i + 1}`,
  appType: "APLICACIÓN WEB",
  date: "22/12/2025",
  status: "activo",
  imageUrl: "/imagenes-temp/alfa.png",
  logoUrl: "/csipro.svg",
  members: Array.from({ length: 10 }, () => ({
    name: "karla",
    avatar: "/miembros/miembro-del-mes.png",
  })),
}));

export default function Page() {
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setItemsPerPage(isDesktop ? 24 : 10);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProjectsToShow(allProjects.slice(0, itemsPerPage * page));
  }, [page, itemsPerPage]);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (
          first.isIntersecting &&
          projectsToShow.length < allProjects.length
        ) {
          setIsLoading(true);

          setTimeout(() => {
            setPage((prev) => prev + 1);
            setIsLoading(false);
          }, 1000);
        }
      },
      {
        rootMargin: "100px",
      },
    );

    const currentElement = loadMoreRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [projectsToShow, isLoading]);

  return (
    <>
      <Navbar titles={["Dev", "Tech", "Projects"]} />
      <Section>
        <div className="absolute left-1/2 top-0 z-0 h-[50%] w-full max-w-6xl -translate-x-1/2 overflow-hidden ">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="35"
                height="35"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 35 0 L 0 0 0 35"
                  fill="none"
                  stroke="#3b2f58"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="40%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="url(#fade)" />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              mask="url(#fade-mask)"
            />
          </svg>

          <GlowContainer className="relative z-10 h-[8rem] sm:h-[12rem] lg:h-[100rem]">
            <Glow
              size="normal"
              className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-2/3 bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_100%)]"
            />
          </GlowContainer>
        </div>

        <div className="relative z-10">
          <h1 className="px-4 pt-10 text-center text-4xl font-bold sm:text-6xl lg:pt-20">
            ¡Descubre los proyectos del{" "}
            <span className="text-primary">CSI PRO</span>!
          </h1>

          <p className="justify-center p-2 text-center text-base sm:text-xl">
            En CSI PRO encontrarás una variedad de proyectos de los miembros del
            laboratorio que resuelven problemas reales usando nuevas
            tecnologías.
          </p>

          <div className="md:mx-auto md:px-32">
            <SearchBar
              shortPlaceholder="Buscar proyectos..."
              longPlaceholder="Búsca proyectos por tecnología, miembros, tipo..."
            />
          </div>
        </div>
      </Section>

      <Section classNameDiv="pb-16">
        <SectionTitle>PROYECTOS</SectionTitle>

        <GlowContainer>
          <GlowGroup className="origin-[12%_50%] 2xl:origin-[25%_50%]">
            <Glow
              size="specific"
              className="left-[12%] bg-[radial-gradient(circle,rgba(49,0,163,0.57)_0%,rgba(49,0,163,0)_60%)] 2xl:left-1/4"
            />
            <Glow
              size="specific"
              className="left-[12%] bg-[radial-gradient(circle,rgba(123,30,114,1)_0%,rgba(123,30,114,0)_50%)] 2xl:left-1/4"
            />
          </GlowGroup>

          <GlowGroup className="origin-[88%_25%] 2xl:origin-[75%_25%]">
            <Glow
              size="specific"
              className="left-[88%] top-[25%] bg-[radial-gradient(circle,rgba(255,158,69,0.45)_0%,rgba(255,158,69,0)_50%)] 2xl:left-3/4"
            />
            <Glow
              size="specific"
              className="left-[88%] top-[25%] bg-[radial-gradient(circle,rgba(135,51,165,0.5)_0%,rgba(135,51,165,0)_50%)] 2xl:left-3/4"
            />
          </GlowGroup>
        </GlowContainer>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 md:px-4 lg:grid-cols-3">
          {projectsToShow.map((project, index) => (
            <ProjectCardTemp key={index} {...project} />
          ))}
        </div>

        <div ref={loadMoreRef} />

        {isLoading && (
          <div className="col-span-full flex items-center justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
      </Section>
      <Footer />
    </>
  );
}
