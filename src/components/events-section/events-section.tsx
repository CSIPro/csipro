import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Event } from "@/models/events";

import { EventsPagination } from "./events-pagination";
import EventCard from "../event-card/event-card";

const fetchEvents = async (limit: number, currentPage: number) => {
  const eventsRes = await fetch(
    `https://admin.csipro.isi.unison.mx/api/eventos/?limit=${limit}&page=${currentPage}`,
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

export default async function EventsSection({
  limit,
  currentPage,
}: {
  limit: number;
  currentPage: number;
}) {
  const eventsRes = await fetchEvents(limit, currentPage);
  console.log(eventsRes.docs.length);
  return (
    <>
      <div className="flex w-full flex-col items-center gap-3 px-2 sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center sm:gap-4 lg:grid-cols-3 lg:gap-8">
        {eventsRes.docs.slice(0, 3).map((event) => {
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
      <EventsPagination />
    </>
  );
}
