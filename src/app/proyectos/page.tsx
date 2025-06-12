import { Footer } from "@/components/footer/footer";
import { GlowContainer, Glow, GlowGroup } from "@/components/glow/glow";
import { Navbar } from "@/components/navbar/navbar";
import ProjectCardTemp from "@/components/project-card-temp/project-card-temp";
import { SearchBar } from "@/components/search-bar.tsx/search-bar";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { fetchProjects } from "@/services/projects";

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const limit = 6;
  const currentPage = parseInt(searchParams?.page ?? "1");

  const projects = await fetchProjects(limit, currentPage);

  return (
    <>
      <Navbar titles={["Dev", "Tech", "Projects"]} />
      <Section>
        <div className="absolute left-1/2 top-0 z-0 h-[50%] w-full max-w-7xl -translate-x-1/2 overflow-hidden ">
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
          {projects.docs.map((project) => (
            <ProjectCardTemp key={project.id} project={project} />
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
