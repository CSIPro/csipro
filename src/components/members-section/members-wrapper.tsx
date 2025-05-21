import { FC, ReactNode } from "react";

import { Member } from "@/models/members";

import {
  MembersPagination,
  MembersPaginationProps,
} from "./members-pagination";
import MemberCard from "../member-card/member-card";

interface MembersWrapperProps extends MembersPaginationProps {
  members: Array<Member>;
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
          names={member.nombres}
          lastnames={member.apellidos}
          email={member.email}
          networks={
            member.redes
              ? member.redes.map((item: any) => ({
                  id: item.id,
                  link: item.link,
                  social_media: {
                    id: item.nombre.id || item.id,
                    nombre: item.nombre.nombre,
                    logo: item.nombre.logo,
                    logo_monocromatico:
                      item.nombre.logo_monocromatico || item.logo_monocromatico,
                  },
                }))
              : []
          }
          entrydate={member.fecha_entrada}
          photo={`https://admin.csipro.isi.unison.mx${member.foto.url}`}
          photoalt={member.foto.alt}
          position={
            member.cargo
              ? Array.isArray(member.cargo)
                ? member.cargo
                : [
                    typeof member.cargo === "string"
                      ? { id: "", nombre: member.cargo }
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
      <div className="hidden w-full flex-col items-center gap-3 px-4 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:gap-10 lg:grid-cols-3">
        {children}
      </div>
      <MembersPagination {...paginationProps} />
    </div>
  );
};
