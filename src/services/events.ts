import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Event } from "@/models/events";

export const fetchEvents = async (limit: number, currentPage: number) => {
  const eventsRes = await fetch(
    `https://admin.csipro.isi.unison.mx/api/eventos/?limit=${limit}&page=${currentPage}`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!eventsRes.ok) {
    return generateEmptyResponse();
  }

  const EventsResponse = createResponseSchema(Event);

  const eventsData = await eventsRes.json();

  const events = EventsResponse.safeParse(eventsData);

  if (!events.success) {
    console.log(events.error);
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
