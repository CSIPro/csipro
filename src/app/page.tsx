import Image from "next/image";

import EventCard from "@/components/event-card/event-card";
import { Glow, GlowContainer, GlowGroup } from "@/components/glow/glow";
import { ProjectCard } from "@/components/project-card/project-card";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Event } from "@/models/events";
import { Project } from "@/models/projects";

const fetchEvents = async () => {
  const eventsRes = await fetch(
    "https://admin.csipro.isi.unison.mx/api/eventos",
    { cache: "no-store" },
  );

  if (!eventsRes.ok) {
    return generateEmptyResponse();
  }

  const EventsResponse = createResponseSchema(Event);

  const eventsData = await eventsRes.json();

  const events = EventsResponse.safeParse(eventsData);

  if (!events.success) {
    return generateEmptyResponse();
  }

  events.data.docs.sort((a, b) => {
    return (
      new Date(b.fechas_horas[b.fechas_horas.length - 1].fecha_hora).getTime() -
      new Date(a.fechas_horas[a.fechas_horas.length - 1].fecha_hora).getTime()
    );
  });

  return events.data;
};

const fetchProjects = async () => {
  const projectsRes = await fetch(
    "https://admin.csipro.isi.unison.mx/api/proyectos",
    {
      cache: "no-store",
    },
  );

  if (!projectsRes.ok) {
    return generateEmptyResponse();
  }

  const ProjectsResponse = createResponseSchema(Project);

  const projectsData = await projectsRes.json();

  const projects = ProjectsResponse.safeParse(projectsData);

  return projects.success ? projects.data : generateEmptyResponse();
};

export default async function Home() {
  const eventsRes = await fetchEvents();
  const projectsRes = await fetchProjects();

  return (
    <>
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
          <Glow breathe />
          {/* Overlayed glows within a group */}
          {/*<GlowGroup turn>
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(123,30,114,1)_100%);] [clip-path:circle(50%_at_50%_50%)]" />
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(49,0,163,1)_57%);] [clip-path:polygon(26%_10%,_49%_52%,_96%_56%,_93%_70%,_85%_80%,_77%_85%,_68%_90%,_58%_94%,_49%_94%,_38%_91%,_28%_87%,_18%_79%,_14%_71%,_8%_63%,_6%_55%,_7%_43%,_11%_31%,_15%_21%)]" />
          </GlowGroup>*/}
        </GlowContainer>

        <div className="px-4 pt-10  sm:pb-6 sm:pt-20">
          <h1 className="text-center text-4xl font-bold  sm:text-6xl ">
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
        <Button
          variant="outline"
          className="px-4 py-4 text-[14px] font-bold uppercase sm:rounded-2xl sm:px-5 sm:py-7 sm:text-2xl "
        >
          Get Started
        </Button>
        <div className="sm:py-5"></div>
        <div className=" relative aspect-video w-11/12 sm:w-8/12   ">
          <Image
            src="portada.jpg"
            fill={true}
            alt="foto de portada"
            className="rounded-lg object-cover sm:rounded-2xl"
            unoptimized
          />
        </div>
        <div className="sm:py-24"></div>
      </Section>

      <Section>
        <SectionTitle>¿QUIÉNES SOMOS?</SectionTitle>
        <div className="flex w-full flex-col items-center gap-3 px-2">
          <div className="relative w-fit">
            <Image
              src="nosotros.JPG"
              width={500}
              height={300}
              alt="foto de portada"
              className="rounded"
              unoptimized
            />
            <div className="absolute -left-1.5 top-10 animate-floating rounded bg-[#0074F9] p-1.5 shadow-md shadow-black/25">
              5 proyectos activos
            </div>

            <div className="absolute -right-1.5 top-[60%] animate-floating rounded bg-[#00C792] p-1.5 shadow-md shadow-black/25">
              Fundado en 2014
            </div>

            <div className="absolute -left-1.5 bottom-12 animate-floating rounded bg-primary p-1.5 shadow-md shadow-black/25">
              38 miembros
            </div>
          </div>
          <p className="text-lg">
            Somos estudiantes de la Universidad de Sonora en la búsqueda de
            innovar. Realizamos e implementamos tecnologías, tales como software
            desarrollado por nosotros
          </p>

          <Button variant="outline" className="text-base">
            Más de nosotros
          </Button>
        </div>
      </Section>

      <Section>
        <GlowContainer>
          <GlowGroup className="origin-[12%_50%] 2xl:origin-[25%_50%]">
            <Glow className="left-[12%] bg-[radial-gradient(circle,rgba(49,0,163,0.57)_0%,rgba(49,0,163,0)_120%);] [clip-path:polygon(48%_55%,_94%_61%,_92%_75%,_87%_80%,_81%_86%,_75%_89%,_67%_92%,_59%_93%,_52%_94%,_47%_94%,_41%_92%,_33%_88%,_26%_84%,_19%_79%,_11%_73%,_11%_73%,_7%_67%,_4%_59%,_3%_54%,_3%_47%,_7%_39%,_9%_32%,_14%_27%,_16%_22%,_19%_17%,_24%_13%,_31%_11%);] 2xl:left-1/4" />
            <Glow className="left-[12%] bg-[radial-gradient(circle,rgba(123,30,114,1)_0%,rgba(123,30,114,0)_100%);] [clip-path:polygon(49%_55%,_98%_61%,_97%_54%,_96%_48%,_94%_41%,_92%_34%,_87%_29%,_82%_24%,_79%_18%,_73%_14%,_67%_11%,_60%_6%,_54%_6%,_47%_4%,_41%_4%,_33%_8%,_27%_12%,_21%_15%)] 2xl:left-1/4" />
          </GlowGroup>
          <GlowGroup className="origin-[88%_15%] 2xl:origin-[75%_15%]">
            <Glow className="left-[88%] top-[15%] bg-[radial-gradient(circle,rgba(255,158,69,0.45)_0%,rgba(255,158,69,0)_100%);] [clip-path:polygon(48%_56%,_4%_56%,_5%_63%,_8%_71%,_11%_76%,_15%_82%,_19%_86%,_24%_90%,_30%_95%,_37%_98%,_46%_99%,_53%_99%,_62%_99%,_68%_96%,_73%_95%,_82%_94%,_85%_87%,_89%_82%);] 2xl:left-3/4" />
            <Glow className="left-[88%] top-[15%] bg-[radial-gradient(circle,rgba(135,51,165,0.5)_0%,rgba(135,51,165,0)_100%);] [clip-path:polygon(50%_54%,_5%_53%,_7%_43%,_9%_36%,_11%_32%,_15%_25%,_20%_21%,_27%_18%,_30%_14%,_37%_11%,_43%_8%,_51%_8%,_58%_8%,_67%_11%,_76%_16%,_81%_20%,_88%_25%,_91%_31%,_92%_37%,_94%_43%,_94%_51%,_94%_58%,_93%_66%,_91%_74%,_89%_80%,_86%_86%,_81%_90%,_77%_92%);] 2xl:left-3/4" />
          </GlowGroup>
        </GlowContainer>
        <SectionTitle>Nuevos eventos</SectionTitle>
        <div className="flex w-full flex-col items-center gap-3 px-2 sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center sm:gap-4 lg:grid-cols-3 lg:gap-8">
          {eventsRes.docs.slice(0, 6).map((event) => {
            return (
              <EventCard
                key={event.id}
                title={event.titulo}
                type={event.tipo}
                dates={event.fechas_horas}
                duration={event.duracion}
                image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
                imageAlt={event.imagen_principal.alt}
                spots={event.cupos - event.asistentes.length}
                location={event.lugar}
              />
            );
          })}
        </div>
      </Section>
      <Section className="pb-16">
        <SectionTitle>Nuestros proyectos</SectionTitle>
        <div className="flex flex-col items-center gap-3 px-2 sm:flex-row sm:justify-center">
          {projectsRes.docs.slice(0, 3).map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.nombre}
                systemType={project.tipo_sistema}
                stack={project.tecnologias ?? []}
                principalImage={project.imagen_principal.url}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
}
