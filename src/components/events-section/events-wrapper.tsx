import { FC, ReactNode } from "react";

import { Event } from "@/models/events";

import { EventsPagination, EventsPaginationProps } from "./events-pagination";
import EventCard from "../event-card/event-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../ui/carousel";

interface EventsWrapperProps extends EventsPaginationProps {
  events: Array<Event>;
}

export const EventsWrapper: FC<EventsWrapperProps> = ({
  events,
  ...paginationProps
}) => {
  return (
    <>
      <DesktopEvents {...paginationProps}>
        {events.map((event) => (
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
        ))}
      </DesktopEvents>
      <MobileEvents>
        {events.map((event) => (
          <CarouselItem key={event.id} className="basis-5/6 sm:basis-3/4">
            <EventCard
              title={event.titulo}
              type={event.tipo}
              dates={event.fechas_horas}
              duration={event.duracion}
              image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
              imageAlt={event.imagen_principal.alt}
              spots={event.cupos - event.asistentes.length}
              location={event.lugar}
            />
          </CarouselItem>
        ))}
      </MobileEvents>
    </>
  );
};

interface DesktopEventsProps extends EventsPaginationProps {
  children: ReactNode;
}

const DesktopEvents: FC<DesktopEventsProps> = ({
  children,
  ...paginationProps
}) => {
  return (
    <>
      <div className="hidden w-full flex-col items-center gap-3 px-4 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:gap-4 lg:grid-cols-3">
        {children}
      </div>
      <EventsPagination {...paginationProps} />
    </>
  );
};

interface MobileEventsProps {
  children: ReactNode;
}

const MobileEvents: FC<MobileEventsProps> = ({ children }) => {
  return (
    <Carousel className="md:hidden">
      <CarouselContent>{children}</CarouselContent>
      <CarouselNavigation name="events" />
    </Carousel>
  );
};
