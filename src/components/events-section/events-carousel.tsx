"use client";

import { usePopulatedEvents } from "@/hooks/use-events";
import { PopulatedPaginatedEventsResponse } from "@/models/events";

import { EventCard } from "../event-card/event-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

interface Props {
  initialData?: PopulatedPaginatedEventsResponse;
}

export const EventsCarousel = ({ initialData }: Props) => {
  const populatedEvents = usePopulatedEvents({ queryOptions: { initialData } });

  if (populatedEvents.isLoading) {
    return <EventsCarouselSkeleton />;
  }

  if (!populatedEvents.data) {
    return (
      <div className="flex h-64 w-full items-center justify-center px-4">
        <p>No es posible cargar los eventos en este momento.</p>
      </div>
    );
  }

  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {populatedEvents.data.docs.map((event) => (
          <CarouselItem
            key={event.id}
            className="basis-[90%] sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/4"
          >
            <EventCard
              title={event.titulo}
              type={event.tipo}
              dates={event.fechas_horas}
              duration={event.duracion}
              image={event.imagen_principal}
              spots={event.cupos - event.asistentes.length}
              location={event.lugar}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation name="events-carousel" />
    </Carousel>
  );
};

export const EventsCarouselSkeleton = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {[1, 2, 3].map((index) => (
          <CarouselItem
            key={index}
            className="basis-[90%] sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/4"
          >
            <Skeleton className="h-96 w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
