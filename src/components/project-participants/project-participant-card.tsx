"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { CMS_URL, cn, getSmallestImageNotThumbnail } from "@/lib/utils";
import { PopulatedProjectParticipant } from "@/models/projects";

import { Button } from "../ui/button";

const colors = [
  "#7145D6",
  "#FF9E45",
  "#00C792",
  "#33C3EF",
  "#BD4143",
  "#9E33B9",
  "#FAFF00",
  "#3359EF",
  "#754DD0",
  "#F0A1E8",
  "#45D7FF",
];

interface Props {
  participant: PopulatedProjectParticipant;
}

export const ProjectParticipantCard = ({ participant }: Props) => {
  const [open, setOpen] = useState(false);
  const participantColors = useMemo(() => {
    const shuffled = [...colors].sort(() => 0.5 - Math.random());
    return { color1: shuffled[0], color2: shuffled[1] };
  }, []);

  const { color1, color2 } = participantColors;

  const profilePicture = getSmallestImageNotThumbnail(participant.miembro.foto);

  return (
    <div className="flex w-full flex-col gap-2 rounded-xl border border-white/10 bg-[#6D6972]/15 p-2 transition-all duration-300 ease-in-out">
      <div className="flex h-20 w-full items-start gap-2">
        <div className="group relative size-20">
          <div
            className={cn("absolute -inset-0.5 -z-[1] rounded-[6px]")}
            style={{
              background: `linear-gradient(235deg, ${color1}, #16131F, ${color2}`,
            }}
          ></div>
          <div
            className={cn("absolute -inset-1 -z-[2] blur-2xl")}
            style={{
              background: `linear-gradient(235deg, ${color1}, #16131F, ${color2}`,
            }}
          ></div>
          <div
            className={cn(
              "z-0 size-20 overflow-hidden rounded-[5px] bg-black p-0.5",
            )}
          >
            <Image
              src={`${CMS_URL}${profilePicture.url}`}
              alt={participant.miembro.foto.alt}
              width={80}
              height={80}
              className="size-full rounded-[3px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <h3 className="text-xl font-bold">
            {participant.miembro.short_name}
          </h3>
          <p className="line-clamp-1 text-sm text-stone-400">
            {participant.roles.map((role) => role.rol.role).join(", ")}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen((o) => !o)}
            className="self-end hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white active:bg-transparent active:text-white"
            aria-label="Toggle description"
          >
            <ChevronDown
              className={cn(
                "transition-all duration-300 ease-in-out",
                open && "rotate-180",
              )}
            />
          </Button>
        </div>
      </div>
      {open && (
        <div>
          <p className="text-stone-400">{participant.descripcion}</p>
        </div>
      )}
    </div>
  );
};
