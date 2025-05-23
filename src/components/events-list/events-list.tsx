"use client";

import { FC, ReactNode, useEffect, useRef } from "react";

import { EventCardTemp } from "../even-card-temp/event-card-temp";
import { EventsPagination } from "../events-section/events-pagination";

interface Props {
  currentPage: number;
  limit: number;
}

export const EventsList: FC<Props> = ({ currentPage, limit }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ behavior: "smooth", top: 0 });
    }
  }, [currentPage]);

  return (
    <div ref={ref} className="block md:hidden">
      <EventCardTemp
        title="GitHub talk"
        image="/assets/github-event.jpg"
        imageAlt="Taller de React"
        dates={[
          {
            fecha_hora: "2025-06-10T10:00:00",
            id: "",
          },
          {
            fecha_hora: "2025-06-11T10:00:00",
            id: "",
          },
        ]}
        location="Auditorio Gustavo Figueroa"
        spots={20}
      />
      <EventCardTemp
        title="GitHub talk"
        image="/assets/github-event.jpg"
        imageAlt="Taller de React"
        dates={[
          {
            fecha_hora: "2025-06-10T10:00:00",
            id: "",
          },
          {
            fecha_hora: "2025-06-11T10:00:00",
            id: "",
          },
        ]}
        location="Auditorio Gustavo Figueroa"
        spots={20}
      />
      <EventCardTemp
        title="GitHub talk"
        image="/assets/github-event.jpg"
        imageAlt="Taller de React"
        dates={[
          {
            fecha_hora: "2025-06-10T10:00:00",
            id: "",
          },
          {
            fecha_hora: "2025-06-11T10:00:00",
            id: "",
          },
        ]}
        location="Auditorio Gustavo Figueroa"
        spots={20}
      />

      <EventsPagination
        currentPage={currentPage}
        totalPages={5}
      ></EventsPagination>
    </div>
  );
};
