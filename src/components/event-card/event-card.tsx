import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Typewriter } from "../typewriter/typewriter";

interface EventCardProps {
  type: string;
  date: string;
  image: string;
  imageAlt: string;
  spots?: number;
  title: string;
  duration: number;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    
    <div className="max-w-sm rounded border border-primary bg-[#160D2A] p-4">
      <div className="flex select-none justify-between">
        <div>
          <span className="flex flex-wrap items-center justify-center gap-2 text-lg font-semibold text-primary-foreground">
            <h1 className="">CSI PRO</h1>
            <span className="flex flex-wrap bg-primary px-1 text-center font-semibold text-white">
              {props.type}
            </span>
          </span>
        </div>
        <div>
          <h1 className="bg-primary px-1 text-lg font-semibold text-white">
            {props.date}
          </h1>
        </div>
      </div>
      <div className="relative py-4">
        <Image
          layout="responsive"
          src={props.image}
          width={500}
          height={300}
          alt={props.imageAlt}
          className="rounded"
          unoptimized
        />
        <div className="absolute bottom-4 right-0 rounded-tl bg-primary px-1 text-white">
          {props.spots === 1 ? (
            <span>{props.spots} cupo disponible</span>
          ) : (
            <span>{props.spots} cupos disponibles</span>
          )}
        </div>
      </div>
      <h1 className={"select-none text-2xl font-semibold text-white"}>
        {props.title}
      </h1>
      <hr className="border-1 my-4 border-primary" />
      <div className="flex items-center justify-between text-sm font-semibold text-white">
        <span></span>
        <span>1:00 p.m. - 2:00 p.m.</span>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline">Registrate aquí</Button>
      </div>
    </div>
  );
};

export default EventCard;
