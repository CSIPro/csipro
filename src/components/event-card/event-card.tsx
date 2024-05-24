import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

import {
  BrandingHeader,
  BrandingHeaderHighlight,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";

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
      <div className="flex select-none justify-between">
        <BrandingHeader>
          <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
          <BrandingHeaderHighlight>{props.type}</BrandingHeaderHighlight>
        </BrandingHeader>
        <div>
          <BrandingHeaderHighlight className="py-1 text-lg font-semibold uppercase">
            {format(props.date, "dd MMM", { locale: es })}
          </BrandingHeaderHighlight>
        </div>
      </div>
      <div className="py-2"></div>
      <div className="relative h-72 w-full overflow-hidden rounded md:h-52">
        <Image
          fill
          src={props.image}
          alt={props.imageAlt}
          className="object-cover"
        />
        <div className="absolute bottom-0 right-0 rounded-tl bg-primary px-1 text-white">
          {props.spots === 1 ? (
            <span>{props.spots} cupo disponible</span>
          ) : (
            <span>{props.spots} cupos disponibles</span>
          )}
        </div>
      </div>
      <div className="py-2"></div>
      <h1 className={"select-text text-2xl font-semibold text-white"}>
        {props.title}
      </h1>
      <hr className="border-1 my-4 border-primary" />
      <div className="flex items-center justify-between text-sm font-semibold text-white">
        <span>{props.location}</span>
        <span>{format(props.time, "hh:mm aaaa", { locale: es })}</span>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline">Registrate aquí</Button>
      </div>
    </div>
  );
};

export default EventCard;
