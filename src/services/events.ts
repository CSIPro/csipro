import { API_URL } from "@/lib/utils";
import { generateEmptyResponse } from "@/models/cms-response";
import {
  PopulatedEvent,
  PopulatedPaginatedEventsResponse,
} from "@/models/events";

export const fetchEvent = async (slug: string) => {
  const eventRes = await fetch(
    `${API_URL}/eventos?depth=2&where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    {
      next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
    },
  );

  if (!eventRes.ok) {
    return null;
  }

  const eventData = await eventRes.json();
  const eventParse = PopulatedPaginatedEventsResponse.safeParse(eventData);

  if (!eventParse.success) {
    console.log(eventParse.error.format());

    for (const err of eventParse.error.errors) {
      console.error(err);
    }

    return null;
  }

  const event = eventParse.data.docs[0];

  if (!event) {
    return null;
  }

  return event;
};

export const fetchEventById = async (id: number) => {
  const eventRes = await fetch(`${API_URL}/eventos/${id}?depth=2`, {
    next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
  });

  if (!eventRes.ok) {
    return null;
  }

  const eventData = await eventRes.json();
  const eventParse = PopulatedEvent.safeParse(eventData);

  if (!eventParse.success) {
    console.log(eventParse.error.format());
    return null;
  }

  return eventParse.data;
};

export const fetchPopulatedEvents = async (
  limit: number,
  currentPage: number,
) => {
  const eventsRes = await fetch(
    `${API_URL}/eventos?depth=2&limit=${limit}&page=${currentPage}`,
    {
      next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 600 },
    },
  );

  if (!eventsRes.ok) {
    return generateEmptyResponse();
  }

  const eventsData = await eventsRes.json();

  const events = PopulatedPaginatedEventsResponse.safeParse(eventsData);

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
