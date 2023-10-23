import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import { FC } from "react";
import { z } from "zod";

import { eventSchema } from "@/payload/collections/events";

import { MainButton } from "../ui/main-button";

interface Props {
  event: z.infer<typeof eventSchema>;
}

export const EventCard: FC<Props> = ({
  event: { image, type, title, subtitle, date },
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-sm">
      <Image
        fill
        src={image.url}
        alt={image.title}
        className="object-cover blur-sm brightness-50"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between p-2">
        <div className="flex w-full items-start justify-between">
          <span className="flex items-center gap-1 text-lg text-white md:text-base lg:text-lg">
            <h4 className="whitespace-nowrap">CSI PRO</h4>
            <span className="whitespace-nowrap rounded-sm border border-white bg-transparent px-1 font-bold uppercase">
              {type.title}
            </span>
          </span>
          <span className="flex w-14 flex-col items-center rounded-sm bg-white p-2 text-muted">
            <p>{format(new Date(date), "dd")}</p>
            <p className="text-sm">
              {format(new Date(date), "LLL", {
                locale: es,
              })}
            </p>
          </span>
        </div>
        <span className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h3 className="text-center text-3xl font-medium">{title}</h3>
          <p className="text-center text-sm">{subtitle}</p>
        </span>
        {new Date(date) >= new Date() && <MainButton>Registrarse</MainButton>}
      </div>
    </div>
  );
};
