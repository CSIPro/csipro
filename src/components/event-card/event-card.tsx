/* eslint-disable prettier/prettier */
import { format, isFuture, isPast } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { EventDate } from "@/models/events";

import {
  BrandingHeader,
  BrandingHeaderHighlight,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { Chip, ChipLabel } from "../chip/chip";

const chipVariants = {
  completed: {
    variant: "gray",
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
  type: string;
  dates: Array<EventDate>;
  image: string;
  imageAlt: string;
  spots?: number;
  title: string;
  duration: number;
  location: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
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

  return (
    <div className="w-full rounded-2xl border border-primary bg-[#160D2A] p-4 sm:w-80 xl:w-[22rem]">
      <div className="flex select-none items-center justify-between">
        <BrandingHeader>
          <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
          <BrandingHeaderHighlight>{props.type}</BrandingHeaderHighlight>
        </BrandingHeader>
        <Chip variant={chipVariant.variant}>
          <ChipLabel uppercase>{chipVariant.label}</ChipLabel>
        </Chip>
      </div>
      <div className="py-2"></div>
      <div className="flex h-14 w-full items-center justify-center">
        <h1 className="line-clamp-2 select-text text-center text-xl font-medium text-white">
          {props.title}
        </h1>
      </div>
      <div className="py-1"></div>
      <hr className="border-1 border-[#2D1B55]" />
      <div className="py-2"></div>
      <div className="relative h-72 w-full overflow-hidden rounded md:h-52">
        <Image
          fill
          src={props.image}
          alt={props.imageAlt}
          className="object-contain"
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
      <div className="py-0.5"></div>
      <div className="flex flex-col items-start gap-2 text-sm text-white">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaRegCalendar />
            <span>{format(nextDate, "PPP", { locale: es })}</span>
          </div>
          <span>{format(nextDate, "hh:mm aaaa", { locale: es })}</span>
        </div>
        <div className="flex items-center gap-2">
          <IoLocation />
          <span>{props.location}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline" className="rounded-xl">
          {isScheduled ? "Registrate aquí" : "Más información"}
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
