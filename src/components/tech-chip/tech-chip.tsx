import Image from "next/image";
import { ReactNode } from "react";

import { CMS_URL, getSmallestImageNotThumbnail } from "@/lib/utils";
import { Media } from "@/models/media";

import { Chip, ChipIcon, ChipLabel } from "../chip/chip";

interface Props {
  icon: Media;
  children: ReactNode;
}

export const TechChip = ({ icon, children }: Props) => {
  const techIcon = getSmallestImageNotThumbnail(icon) ?? icon;

  return (
    <Chip
      variant="purple"
      className="rounded-md border-none bg-primary/20 px-4 py-2 text-white"
    >
      <ChipIcon>
        <Image
          src={`${CMS_URL}${techIcon.url}`}
          alt={icon.alt}
          width={32}
          height={32}
          className="size-5 object-contain lg:size-6"
        />
      </ChipIcon>
      <ChipLabel className="text-base font-medium xl:text-lg">
        {children}
      </ChipLabel>
    </Chip>
  );
};
