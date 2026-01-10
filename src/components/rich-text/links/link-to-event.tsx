import Link from "next/link";
import { ReactNode } from "react";

import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { CsiproLogo } from "@/components/socials/logos/csipro-logo";
import { cn } from "@/lib/utils";
import { PopulatedEvent } from "@/models/events";
import { fetchEventById } from "@/services/events";

type Props =
  | { event: PopulatedEvent; className?: string; children?: ReactNode }
  | { eventId: number; className?: string; children?: ReactNode };

export const LinkToEvent = async (props: Props) => {
  const event =
    "event" in props ? props.event : await fetchEventById(props.eventId);

  if (!event) {
    return null;
  }

  return (
    <Link
      href={`/eventos/${event.slug}`}
      className={cn("group inline-block", props.className)}
    >
      <Chip
        variant="white"
        className={cn(
          "gap-1 rounded border-none bg-primary/20 p-1 px-1 transition-all duration-300 ease-in-out group-hover:bg-primary/40",
        )}
      >
        <ChipIcon
          className={cn(
            "flex size-6 items-center justify-center overflow-hidden rounded-full bg-primary p-1",
          )}
        >
          <CsiproLogo />
        </ChipIcon>
        <ChipLabel className="font-medium">
          {props.children ?? event.titulo}
        </ChipLabel>
      </Chip>
    </Link>
  );
};
