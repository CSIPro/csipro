import { format, isFuture, isPast } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { CMS_URL, getSmallestImageNotThumbnail } from "@/lib/utils";
import { EventDate, PopulatedEvent } from "@/models/events";
import { Media } from "@/models/media";

import {
  BrandingHeader,
  BrandingHeaderHighlight,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { Chip, ChipLabel } from "../chip/chip";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const chipVariants = {
  completed: {
    variant: "purple",
    label: "Completed",
  },
  ongoing: {
    variant: "blue",
    label: "Ongoing",
  },
  singleDay: {
    variant: "yellow",
    label: "Single-day",
  },
  multiDay: {
    variant: "orange",
    label: "Multi-day",
  },
} as const;

interface EventCardProps {
  variant?: "default" | "compact";
  type: string;
  dates: Array<EventDate>;
  image: Media;
  spots?: number;
  title: string;
  duration: number;
  location: string;
  event: PopulatedEvent;
  slug: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  variant = "default",
  ...props
}) => {
  const dates = props.dates
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

  const nextDate = dates.find((date) => isFuture(date)) ?? dates[0];

  const eventImage = getSmallestImageNotThumbnail(props.image);
  const thumbnailImage = props.image.sizes?.thumbnail?.url
    ? props.image.sizes.thumbnail
    : eventImage;

  if (variant === "compact") {
    return (
      <div className="h-full w-full rounded-xl border border-primary bg-[#160D2A] p-2 shadow-[0_0_12px_rgba(137,84,255,0.2)]">
        <div className="flex select-none items-center justify-between pb-2">
          <BrandingHeader>
            <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
            <BrandingHeaderHighlight>{props.type}</BrandingHeaderHighlight>
          </BrandingHeader>

          <Chip variant={chipVariant.variant}>
            <ChipLabel uppercase>{chipVariant.label}</ChipLabel>
          </Chip>
        </div>

        <hr className="border-1 border-[#2D1B55] pb-3" />

        <div className="flex gap-2">
          <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={`${CMS_URL}${thumbnailImage.url}`}
              alt={props.image.alt}
              fill
              className="object-scale-down"
              loading="lazy"
            />
            {isScheduled && (
              <div className="absolute bottom-0 left-0 right-0 bg-primary px-2 text-center text-sm font-semibold text-white">
                {props.spots === 1
                  ? "1 cupo disponilbe"
                  : `${props.spots} cupos disponibles`}
              </div>
            )}
          </div>

          <div className="flex w-full flex-col justify-between text-white">
            <div className="space-y-1">
              <h3 className="line-clamp-2 text-lg font-semibold">
                {props.title}
              </h3>
              <div className="line-clamp-1 flex items-center gap-2 text-sm">
                <MapPin size={14} />
                <span aria-label="Location">{props.location}</span>
              </div>

              <div className="line-clamp-1 flex items-center gap-2 text-sm">
                <Calendar size={14} />
                <span aria-label="Date">
                  {format(nextDate, "PPP", { locale: es })}
                </span>
              </div>

              <div className="line-clamp-1 flex items-center gap-2 text-sm">
                <Clock size={14} />
                <span aria-label="Time">
                  {format(nextDate, "hh:mm aaaa", { locale: es })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <ul className="flex flex-wrap gap-2">
            {props.event.participantes.map((participant) => (
              <li key={participant.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={`/miembros/${participant.slug}`}
                      className="block h-8 w-8 overflow-hidden rounded-full"
                    >
                      <Image
                        src={`${CMS_URL}${participant.foto.sizes?.thumbnail?.url ?? participant.foto.url}`}
                        alt={participant.foto.alt}
                        width={32}
                        height={32}
                        className="size-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{participant.short_name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>

          <Button asChild>
            <Link href={`/eventos/${props.slug}`}>Más información</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl border border-primary bg-[#160D2A] p-4 xl:max-w-[26rem] 2xl:max-w-full">
      <div className="flex w-full select-none items-center justify-between gap-2">
        <BrandingHeader className="place-self-start">
          <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
          <BrandingHeaderHighlight>{props.type}</BrandingHeaderHighlight>
        </BrandingHeader>
        <Chip variant={chipVariant.variant} className="place-self-end">
          <ChipLabel uppercase>{chipVariant.label}</ChipLabel>
        </Chip>
      </div>
      <div className="py-2"></div>
      <div className="flex h-14 w-full items-center justify-center">
        <h3 className="line-clamp-2 select-text text-center text-xl font-medium text-white">
          {props.title}
        </h3>
      </div>
      <div className="py-1"></div>
      <hr className="border-1 border-[#2D1B55]" />
      <div className="py-2"></div>
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded">
        <Image
          fill
          src={`${CMS_URL}${eventImage.url}`}
          alt={props.image.alt}
          className="object-contain"
          loading="lazy"
        />
        {isScheduled && (
          <div className="absolute bottom-0 right-0 rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
            {props.spots === 1 ? (
              <span>{`${props.spots} cupo disponible`}</span>
            ) : (
              <span>{`${props.spots} cupos disponibles`}</span>
            )}
          </div>
        )}
      </div>
      <div className="py-1"></div>
      <Chip>
        <ChipLabel uppercase>
          {isOngoing ? "Próxima fecha" : "Inicio"}
        </ChipLabel>
      </Chip>
      <div className="py-1"></div>
      <div className="flex w-full flex-col items-start gap-2 text-sm text-white">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span aria-label="Date">
              {format(nextDate, "PPP", { locale: es })}
            </span>
          </div>
          <span aria-label="Time">
            {format(nextDate, "hh:mm aaaa", { locale: es })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span aria-label="Location">{props.location}</span>
        </div>
      </div>
      <div className="mt-4 flex w-full justify-center">
        <Button asChild>
          <Link href={`/eventos/${props.slug}`}>Más información</Link>
        </Button>
      </div>
    </div>
  );
};
