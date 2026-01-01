"use client";

import { useOnInView } from "react-intersection-observer";

import { useInfinitePopulatedEvents } from "@/hooks/use-events";
import { CMS_URL } from "@/lib/utils";
import { PopulatedPaginatedEventsResponse } from "@/models/events";

import { EventCard } from "../event-card/event-card";

interface Props {
  limit?: number;
  initialData?: PopulatedPaginatedEventsResponse;
}

export const InfiniteEvents = ({ limit, initialData }: Props) => {
  const infiniteEvents = useInfinitePopulatedEvents({ limit, initialData });
  const trackingRef = useOnInView(
    (inView) => {
      if (inView && infiniteEvents.hasNextPage && !infiniteEvents.isFetching) {
        infiniteEvents.fetchNextPage();
      }
    },
    { threshold: 0.5 },
  );

  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {infiniteEvents.data?.pages.map((page) =>
        page.docs.map((event) => (
          <li key={event.id}>
            <EventCard
              variant="compact"
              title={event.titulo}
              type={event.tipo}
              dates={event.fechas_horas}
              duration={event.duracion}
              image={`${CMS_URL}${event.imagen_principal.url}`}
              imageAlt={event.imagen_principal.alt}
              spots={event.cupos - event.asistentes.length}
              location={event.lugar}
            />
          </li>
        )),
      )}
      <div ref={trackingRef} />
    </ul>
  );
};
