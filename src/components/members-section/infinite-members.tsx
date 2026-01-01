"use client";

import { useOnInView } from "react-intersection-observer";

import { useInfinitePopulatedMembers } from "@/hooks/use-members";
import { CMS_URL } from "@/lib/utils";
import { PopulatedPaginatedMembersResponse } from "@/models/members";

import { MemberCard } from "../member-card/member-card";

interface Props {
  limit?: number;
  initialData?: PopulatedPaginatedMembersResponse;
}

export const InfiniteMembers = ({ limit, initialData }: Props) => {
  const infiniteMembers = useInfinitePopulatedMembers({ limit, initialData });
  const trackingRef = useOnInView(
    (inView) => {
      if (
        inView &&
        infiniteMembers.hasNextPage &&
        !infiniteMembers.isFetchingNextPage
      ) {
        infiniteMembers.fetchNextPage();
      }
    },
    { threshold: 0.5 },
  );

  return (
    <ul className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      {infiniteMembers.data?.pages.map((page) =>
        page.docs.map((member) => (
          <li key={member.id}>
            <MemberCard
              member={member}
              name={member.nombres}
              lastName={member.apellidos}
              shortName={member.short_name}
              slug={member.slug}
              email={member.email}
              networks={
                member.redes
                  ? member.redes.map((item) => ({
                      id: item.id,
                      link: item.link,
                      social_media: {
                        id: item.red.id,
                        nombre: item.red.nombre,
                        logo: item.red.logo,
                        logo_monocromatico: item.red.logo_monocromatico,
                      },
                    }))
                  : []
              }
              joinDate={member.fecha_entrada}
              projectCount={member.proyectos.totalDocs}
              profilePicture={`${CMS_URL}${member.foto.url}`}
              profilePictureAlt={member.foto.alt}
              position={
                member.cargo
                  ? Array.isArray(member.cargo)
                    ? member.cargo
                    : [
                        typeof member.cargo === "string"
                          ? { id: 0, nombre: member.cargo }
                          : {
                              id: member.cargo.id,
                              nombre: member.cargo.nombre,
                            },
                      ]
                  : []
              }
            />
          </li>
        )),
      )}
      <div ref={trackingRef} />
    </ul>
  );
};
