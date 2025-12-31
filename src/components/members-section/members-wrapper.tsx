import { FC, ReactNode } from "react";

import { CMS_URL } from "@/lib/utils";
import { PopulatedMember } from "@/models/members";

import {
  MembersPagination,
  MembersPaginationProps,
} from "./members-pagination";
import { MemberCard } from "../member-card/member-card";

interface MembersWrapperProps extends MembersPaginationProps {
  members: Array<PopulatedMember>;
}

export const MembersWrapper: FC<MembersWrapperProps> = ({
  members,
  ...paginationProps
}) => {
  return (
    <Members {...paginationProps}>
      {members.map((member) => (
        <MemberCard
          key={member.id}
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
                      : { id: member.cargo.id, nombre: member.cargo.nombre },
                  ]
              : []
          }
        />
      ))}
    </Members>
  );
};

interface DesktopMembersProps extends MembersPaginationProps {
  children: ReactNode;
}

const Members: FC<DesktopMembersProps> = ({ children, ...paginationProps }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full grid-cols-2 flex-col items-center gap-3 px-4 max-md:justify-items-center md:grid-cols-2 md:items-center md:justify-items-center md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
      <MembersPagination {...paginationProps} />
    </div>
  );
};
