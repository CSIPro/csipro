import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

import { Button } from "@/components/ui/button";

import {
  BrandingHeader,
  BrandingHeaderHighlight,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { Chip } from "../chip/chip";

interface EventCardProps {
  type: string;
  date: Date;
  image: string;
  imageAlt: string;
  spots?: number;
  title: string;
  duration: number;
  location: string;
  time: Date;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <div className="w-full rounded border border-primary bg-[#160D2A] p-4 sm:max-w-80">
      <div className="flex select-none items-center justify-between">
        <BrandingHeader>
          <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
          <BrandingHeaderHighlight>{props.type}</BrandingHeaderHighlight>
        </BrandingHeader>
        <Chip variant="orange">Multi-day</Chip>
        {/* <div>
          <BrandingHeaderHighlight className="py-1 text-lg font-semibold uppercase">
            {format(props.date, "dd MMM", { locale: es })}
          </BrandingHeaderHighlight>
        </div> */}
      </div>
      <div className="py-2"></div>
      <h1 className="select-text text-center text-xl font-medium text-white">
        {props.title}
      </h1>
      <div className="py-1"></div>
      <hr className="border-1 border-[#2D1B55]" />
      <div className="py-2"></div>
      <div className="relative h-72 w-full overflow-hidden rounded md:h-52">
        <Image
          fill
          src={props.image}
          alt={props.imageAlt}
          className="object-cover"
        />
        <div className="absolute bottom-0 right-0 rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
          {props.spots === 1 ? (
            <span>{`${props.spots} cupo disponible`}</span>
          ) : (
            <span>{`${props.spots} cupos disponibles`}</span>
          )}
        </div>
      </div>
      <div className="py-1"></div>
      <Chip>Inicio</Chip>
      <div className="py-0.5"></div>
      <div className="flex flex-col items-start gap-2 text-sm text-white">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaRegCalendar />
            <span>{format(props.date, "PPP", { locale: es })}</span>
          </div>
          <span>{format(props.time, "hh:mm aaaa", { locale: es })}</span>
        </div>
        <div className="flex items-center gap-2">
          <IoLocation />
          <span>{props.location}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline" className="rounded-xl">
          Registrate aquí
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
