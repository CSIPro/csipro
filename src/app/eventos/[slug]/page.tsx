import { isFuture, isPast } from "date-fns";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Chip, ChipLabel } from "@/components/chip/chip";
import { chipVariants } from "@/components/event-card/event-card";
import { EventDateItem } from "@/components/events-section/event-date-item";
import { EventRequirementItem } from "@/components/events-section/event-requirement-item";
import { ImageGallery } from "@/components/image-gallery/image-gallery";
import { MemberChip } from "@/components/member-chip/member-chip";
import { Navbar } from "@/components/navbar/navbar";
import { RichText } from "@/components/rich-text/rich-text";
import { Section } from "@/components/section/section";
import { CMS_URL } from "@/lib/utils";
import { fetchEvent } from "@/services/events";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await fetchEvent(params.slug);

  if (!event) {
    return notFound();
  }

  const dates = event.fechas_horas
    .map((date) => new Date(date.fecha_hora))
    .sort((a, b) => a.getTime() - b.getTime());

  const isCompleted = dates.every((date) => isPast(date));
  const isScheduled = dates.every((date) => isFuture(date));

  const isOngoing = !isCompleted && !isScheduled;

  const isMultiDay = dates.length > 1;

  const chipVariant = isCompleted
    ? chipVariants["completed"]
    : isOngoing
      ? chipVariants["ongoing"]
      : isMultiDay
        ? chipVariants["multiDay"]
        : chipVariants["singleDay"];

  const gallery = [
    { id: "featured-picture", imagen: event.imagen_principal },
    ...event["imagenes_secundarias"],
  ];

  return (
    <>
      <Navbar titles={["TECH", "INSIGHTS", "TALKS", "WORKSHOPS", "EVENTS"]} />
      <main className="w-full">
        <Section innerClassName="pb-16">
          <div className="relative h-96 w-full overflow-hidden lg:h-[40rem]">
            <picture>
              {event.imagen_principal.sizes?.hero?.url ? (
                <source
                  srcSet={`${CMS_URL}${event.imagen_principal.sizes.hero.url}`}
                  type={
                    event.imagen_principal.sizes.hero.mimeType ?? "image/webp"
                  }
                  media="(min-width: 1200px)"
                />
              ) : null}
              {event.imagen_principal.sizes?.large?.url ? (
                <source
                  srcSet={`${CMS_URL}${event.imagen_principal.sizes.large.url}`}
                  type={
                    event.imagen_principal.sizes.large.mimeType ?? "image/webp"
                  }
                  media="(min-width: 1024px)"
                />
              ) : null}
              {event.imagen_principal.sizes?.medium?.url ? (
                <source
                  srcSet={`${CMS_URL}${event.imagen_principal.sizes.medium.url}`}
                  type={
                    event.imagen_principal.sizes.medium.mimeType ?? "image/webp"
                  }
                  media="(min-width: 768px)"
                />
              ) : null}
              {event.imagen_principal.sizes?.small?.url ? (
                <source
                  srcSet={`${CMS_URL}${event.imagen_principal.sizes.small.url}`}
                  type={
                    event.imagen_principal.sizes.small.mimeType ?? "image/webp"
                  }
                  media="(max-width: 767px)"
                />
              ) : null}
              <Image
                src={`${CMS_URL}${event.imagen_principal.url}`}
                alt={event.imagen_principal.alt}
                width={1400}
                height={1000}
                className="absolute h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background">
              <div className="relative z-10 flex w-full flex-col items-start gap-4 justify-end h-full px-4">
                <Chip variant={chipVariant.variant}>
                  <ChipLabel uppercase>{chipVariant.label}</ChipLabel>
                </Chip>

                <h1 className="text-4xl font-bold tracking-wide lg:text-6xl">
                  {event.titulo}
                </h1>
                <div className="flex w-full flex-col gap-1">
                  <span className="text-sm font-medium uppercase text-neutral-400/80">
                    Dirigido por
                  </span>
                  <div className="flex w-full flex-wrap gap-2">
                    {event.participantes.map((member) => (
                      <MemberChip key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pt-6">
            <span className="block h-px w-full bg-primary"></span>
          </div>
        </Section>
        <Section innerClassName="pb-16">
          <div className="flex w-full max-w-5xl flex-col items-start gap-2 px-4">
            <h2 className="font-poppins text-xl font-medium">
              Información general
            </h2>
            <span className="flex items-start gap-2">
              <Calendar className="shrink-0" />
              <span className="flex flex-wrap items-center gap-2">
                {dates.map((date, index) => (
                  <EventDateItem key={index} date={date} />
                ))}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Clock />
              <span>
                {event.duracion} hora{event.duracion !== 1 ? "s" : ""}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin />
              <span>{event.lugar}</span>
            </span>
            <span className="flex items-center gap-2">
              <Ticket />
              <span>{event.cupos} cupos</span>
            </span>
          </div>
        </Section>
        <Section innerClassName="pb-16">
          <div className="flex w-full max-w-5xl flex-col items-start gap-2 px-4">
            <h2 className="font-poppins text-xl font-medium">Descripción</h2>
            {event.descripcion ? (
              <RichText
                // @ts-expect-error I don't want to type out the Lexical output structure
                data={event.descripcion}
                className="space-y-4 text-pretty leading-relaxed"
              />
            ) : (
              <span className="italic text-stone-400/80">
                No hay descripción disponible.
              </span>
            )}
          </div>
        </Section>
        <Section innerClassName="pb-16">
          <div className="flex w-full max-w-5xl flex-col items-start gap-2 px-4">
            <h2 className="font-poppins text-xl font-medium">Requisitos</h2>
            {event.requisitos.length === 0 ? (
              <span className="italic text-stone-400/80">
                Este evento no tiene requisitos.
              </span>
            ) : (
              <ul className="w-full list-none space-y-2">
                {event.requisitos.map((req, index) => (
                  <EventRequirementItem key={index} requirement={req} />
                ))}
              </ul>
            )}
          </div>
        </Section>
        <Section innerClassName="pb-16">
          <div className="flex w-full max-w-5xl flex-col items-start gap-2 px-4">
            <h2 className="font-poppins text-xl font-medium">Galería</h2>
            <ImageGallery
              gallery={gallery}
              identifier={`Galería de ${event.titulo}`}
              className="aspect-video h-auto lg:aspect-video"
            />
          </div>
        </Section>
      </main>
    </>
  );
}
