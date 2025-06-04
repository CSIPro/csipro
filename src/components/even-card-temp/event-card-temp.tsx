import { format, isFuture } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocationSharp, IoStopwatchOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { EventDate } from "@/models/events";

import {
  BrandingHeader,
  BrandingHeaderTitle,
  BrandingHeaderHighlight,
} from "../branding-header/branding-header";
import { Chip, ChipLabel } from "../chip/chip";

interface EventCardTempProps {
  title: string;
  image: string;
  imageAlt: string;
  dates: EventDate[];
  location: string;
  spots?: number;
  type?: string;
}

export const EventCardTemp: React.FC<EventCardTempProps> = ({
  title,
  image,
  imageAlt,
  dates,
  location,
  spots,
}) => {
  const parsedDates = dates
    .map((date) => new Date(date.fecha_hora))
    .sort((a, b) => a.getTime() - b.getTime());

  const isScheduled = parsedDates.every((d) => isFuture(d));
  const nextDate = parsedDates.find((d) => isFuture(d)) ?? parsedDates[0];

  return (
    <div className="p-2">
      <div className="w-full max-w-sm rounded-xl border border-primary bg-[#160D2A] p-4 shadow-[0_0_12px_rgba(137,84,255,0.2)]">
        <div className="flex select-none items-center justify-between pb-2">
          <BrandingHeader>
            <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
            <BrandingHeaderHighlight>TALKS</BrandingHeaderHighlight>
          </BrandingHeader>

          <Chip variant="orange">
            <ChipLabel uppercase>Multi-day</ChipLabel>
          </Chip>
        </div>

        <hr className="border-1 border-[#2D1B55] pb-3" />

        <div className="flex gap-4">
          <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
            {isScheduled && (
              <div className="absolute bottom-0 left-0 right-0 bg-primary px-2 text-center text-[10px] font-semibold text-white">
                {spots === 1
                  ? "1 cupo disponilbe"
                  : `${spots} cupos disponibles`}
              </div>
            )}
          </div>

          <div className="flex w-full flex-col justify-between text-white">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">{title}</h2>
              <div className="flex items-center gap-2 text-xs">
                <IoLocationSharp />
                <span>{location}</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <FaRegCalendar />
                <span>{format(nextDate, "PPP", { locale: es })}</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <IoStopwatchOutline />
                <span>{format(nextDate, "hh:mm aaaa", { locale: es })}</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="default"
                className="rounded-s px-4 py-1 text-xs hover:bg-violet-700"
              >
                {isScheduled ? "Registrarse aquí" : "Más info"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
