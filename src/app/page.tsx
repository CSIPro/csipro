import Image from "next/image";

import EventCard from "@/components/event-card/event-card";
import { Glow, GlowContainer, GlowGroup } from "@/components/glow/glow";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Event } from "@/models/events";

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

  return events.success ? events.data : generateEmptyResponse();
};

export default async function Home() {
  const eventsRes = await fetchEvents();

  return (
    <>
      <section className="relative flex w-full flex-col items-center gap-4 sm:flex-row">
        <GlowContainer>
          {/* Basic usage */}
          {/* <Glow breathe /> */}
          {/* Overlayed glows within a group */}
          <GlowGroup turn>
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(123,30,114,1)_100%);] [clip-path:circle(50%_at_50%_50%)]" />
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(49,0,163,1)_57%);] [clip-path:polygon(26%_10%,_49%_52%,_96%_56%,_93%_70%,_85%_80%,_77%_85%,_68%_90%,_58%_94%,_49%_94%,_38%_91%,_28%_87%,_18%_79%,_14%_71%,_8%_63%,_6%_55%,_7%_43%,_11%_31%,_15%_21%)]" />
          </GlowGroup>
        </GlowContainer>
        <div className="px-4 py-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Un espacio de <span className="text-primary">desarrollo</span>,
            <span className="text-primary"> innovación</span> e
            <span className="text-primary"> investigación</span> en la
            Universidad de Sonora
          </h1>
        </div>
        <div className="max-w-full px-4 py-6 sm:max-w-2xl">
          <Image
            src="portada.jpg"
            width={500}
            height={300}
            alt="foto de portada"
            className="rounded"
            unoptimized
          />
        </div>
      </section>
      <section>
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
      </section>

      <section className="w-full pb-3">
        <SectionTitle>Nuevos eventos</SectionTitle>
        <div className="flex flex-col items-center gap-3 px-2 sm:flex-row sm:justify-center">
          {eventsRes.docs.slice(0, 3).map((event) => {
            const eventDate = new Date(event.fecha);
            return (
              <EventCard
                key={event.id}
                title={event.titulo}
                type={event.tipo}
                date={eventDate}
                duration={event.duracion}
                image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
                imageAlt={event.imagen_principal.alt}
                spots={event.cupos}
                location={event.lugar}
                time={new Date(event.hora)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
