import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { CMS_URL, cn, getSmallestImageNotThumbnail } from "@/lib/utils";
import { Member } from "@/models/members";
import { fetchMemberById } from "@/services/members";

import { Chip, ChipIcon, ChipLabel } from "../chip/chip";

type Props =
  | {
      member: Member;
      children?: ReactNode;
      className?: string;
      chipClassName?: string;
      iconClassName?: string;
    }
  | {
      memberId: number;
      children?: ReactNode;
      className?: string;
      chipClassName?: string;
      iconClassName?: string;
    };

export const MemberChip = async (props: Props) => {
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
      className={cn("group", props.className)}
    >
      <Chip
        variant="white"
        className={cn(
          "gap-1 rounded border-none bg-primary/20 p-1 px-2 transition-all duration-300 ease-in-out group-hover:bg-primary/40",
          props.chipClassName,
        )}
      >
        <ChipIcon
          className={cn(
            "size-6 overflow-hidden rounded-full",
            props.iconClassName,
          )}
        >
          <Image
            src={`${CMS_URL}${thumbnail.url!}`}
            alt={member.foto.alt}
            width={32}
            height={32}
            className="size-full object-cover"
          />
        </ChipIcon>
        <ChipLabel className="font-medium">
          {props.children ?? member.short_name}
        </ChipLabel>
      </Chip>
    </Link>
  );
};
