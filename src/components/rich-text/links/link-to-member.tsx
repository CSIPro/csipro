import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { CMS_URL, cn, getSmallestImageNotThumbnail } from "@/lib/utils";
import { PopulatedMember } from "@/models/members";
import { fetchMemberById } from "@/services/members";

type Props =
  | {
      member: PopulatedMember;
      children?: ReactNode;
      className?: string;
    }
  | {
      memberId: number;
      children?: ReactNode;
      className?: string;
    };

export const LinkToMember = async (props: Props) => {
  const member =
    "member" in props ? props.member : await fetchMemberById(props.memberId);

  if (!member) {
    return null;
  }

  const picture = getSmallestImageNotThumbnail(member.foto);

  const thumbnail = member.foto.sizes?.thumbnail?.url
    ? member.foto.sizes.thumbnail
    : picture;

  return (
    <Link
      href={`/miembros/${member.slug}`}
      className={cn("group inline-block", props.className)}
    >
      <Chip
        variant="white"
        className={cn(
          "gap-1 rounded border-none bg-primary/20 px-0.5 py-0 transition-all duration-300 ease-in-out group-hover:bg-primary/40",
        )}
      >
        <ChipIcon className={cn("size-4 overflow-hidden rounded-[2px]")}>
          <Image
            src={`${CMS_URL}${thumbnail.url!}`}
            alt={member.foto.alt}
            width={32}
            height={32}
            className="size-full object-cover"
          />
        </ChipIcon>
        <ChipLabel className="text-base font-medium leading-relaxed">
          {props.children ?? member.short_name}
        </ChipLabel>
      </Chip>
    </Link>
  );
};
