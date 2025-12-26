import { CMS_URL } from "@/lib/utils";
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
            className="basis-5/6 sm:basis-3/4 md:basis-[45%] md:pl-8 lg:basis-1/3"
          >
            <EventCard
              title={event.titulo}
              type={event.tipo}
              dates={event.fechas_horas}
              duration={event.duracion}
              image={`${CMS_URL}${event.imagen_principal.url}`}
              imageAlt={event.imagen_principal.alt}
              spots={event.cupos - event.asistentes.length}
              location={event.lugar}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
