import { cn } from "@/lib/utils";
import { getMemberEvents } from "@/services/members";

import { EventCard } from "../event-card/event-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface Props {
  memberId: number;
}

export default async function MemberEvents({ memberId }: Props) {
  const memberEvents = await getMemberEvents(memberId);

  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {memberEvents.docs.map((event) => (
          <CarouselItem
            key={event.id}
            className={cn(
              "basis-5/6 sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/4",
              memberEvents.docs.length === 1 && "basis-full md:basis-1/2",
            )}
          >
            <EventCard
              title={event.titulo}
              type={event.tipo}
              dates={event.fechas_horas}
              duration={event.duracion}
              image={event.imagen_principal}
              spots={event.cupos - event.asistentes.length}
              location={event.lugar}
              slug={event.slug}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
