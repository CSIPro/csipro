import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarCheck2, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { CMS_URL } from "@/lib/utils";
import { PopulatedMember } from "@/models/members";
import { PopulatedSocialMedia } from "@/models/social-media";

import { Position } from "./../../models/positions";
import { MemberBadge } from "./member-badge";

type MappedNetworks = {
  id: string;
  link: string;
  social_media: PopulatedSocialMedia;
};

interface MemberCardProps {
  name: string;
  lastName: string;
  shortName: string;
  slug: string;
  email: string;
  networks: Array<MappedNetworks>;
  joinDate: string | null;
  profilePicture: string;
  profilePictureAlt: string;
  position: Array<Position>;
  projectCount: number;
  member: PopulatedMember;
}

export const MemberCard: FC<MemberCardProps> = ({ member, ...props }) => {
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
  const getRandomColors = () => {
    const shuffled = [...colors].sort(() => 0.5 - Math.random());
    return { color1: shuffled[0], color2: shuffled[1] };
  };

  const { color1, color2 } = getRandomColors();

  return (
    <div className="flex flex-col max-md:w-[185px] max-md:items-center max-md:justify-center max-sm:w-[150px] lg:h-full">
      <div className="group relative h-full bg-[#16131F] max-md:flex max-md:size-[185px] max-md:items-center max-md:justify-center max-md:rounded-full max-sm:size-[150px] md:w-[280px] md:p-2">
        <div
          className="absolute inset-[-2px] z-[-1] bg-gradient-to-br opacity-80 max-md:rounded-full"
          style={{
            background: `linear-gradient(235deg, ${color1}, #16131F, ${color2}`,
          }}
        ></div>
        <div
          className="absolute inset-[-3px] z-[-2] bg-gradient-to-br blur-[50px] transition-opacity group-hover:opacity-50 lg:opacity-50 lg:group-hover:opacity-100"
          style={{
            background: `linear-gradient(235deg, ${color1}, #16131F, ${color2}`,
          }}
        ></div>
        <div className="relative h-52 overflow-hidden rounded max-md:flex max-md:w-full max-md:items-center max-md:justify-center max-md:rounded-full max-sm:h-[135px] max-sm:w-[135px] md:h-64 md:w-full">
          <Image
            src={`${CMS_URL}${member.foto.url}`}
            alt={member.foto.alt}
            className="object-cover"
            fill
            sizes="(max-width: 1280px) 30vw, 25vw"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 py-2 max-md:hidden">
          <div className="flex w-full flex-col items-center justify-center gap-2 lg:gap-1">
            <div className="flex w-full items-center justify-center">
              <h3 className="whitespace-nowrap text-center text-xl font-bold text-white">
                {member.short_name}
              </h3>
            </div>

            <div className="flex w-full items-center justify-center">
              <span className="text-center text-sm font-normal text-white">
                <MemberBadge
                  entryDate={member.fecha_entrada}
                  position={props.position}
                />
              </span>
            </div>

            <div className="flex w-full items-center justify-center gap-6">
              {member.redes.map((net) => {
                const logoMonoUrl = net.red.logo_monocromatico?.url;
                return (
                  <Link
                    key={net.id}
                    href={net.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-75"
                  >
                    <Image
                      key={net.id}
                      src={`${CMS_URL}${logoMonoUrl}`}
                      alt={net.red.nombre}
                      className="size-5"
                      width={32}
                      height={32}
                    />
                  </Link>
                );
              })}
              {member.redes.length === 0 && <div className="h-5" />}
            </div>
          </div>

          <hr className="w-full border border-[#2D1B55]" />

          <div className="flex items-center">
            {member.fecha_entrada ? (
              <span className="text-sm font-light text-white/80">
                {`Miembro desde ${format(new Date(member.fecha_entrada), "LLL yyyy", { locale: es })}`}
              </span>
            ) : null}
          </div>

          {member.proyectos.totalDocs > 0 ? (
            <div className="flex items-center gap-4 text-white">
              <Terminal size={24} />
              <span className="text-lg font-bold">{`${member.proyectos.totalDocs} proyecto${member.proyectos.totalDocs !== 1 ? "s" : ""}`}</span>
            </div>
          ) : member.eventos.totalDocs > 0 ? (
            <div className="flex items-center gap-4 text-white">
              <CalendarCheck2 size={24} />
              <span className="text-lg font-bold">{`${member.eventos.totalDocs} evento${member.eventos.totalDocs !== 1 ? "s" : ""}`}</span>
            </div>
          ) : (
            <div className="h-6" />
          )}

          <div className="flex justify-center">
            <Button
              asChild
              className="rounded-xl text-white transition-colors hover:bg-[#491288]"
            >
              <Link href={`/miembros/${props.slug}`}>Ver Portafolio</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:space-y-3 max-md:p-5">
        <div className="flex w-full flex-col items-center justify-center space-y-2">
          <div className="flex w-full items-center justify-center">
            <h3 className="line-clamp-2 text-center text-xl font-bold text-white">
              {member.short_name}
            </h3>
          </div>
          <div className="flex w-full items-center justify-center">
            <span className="text-center text-sm font-normal text-white">
              <MemberBadge
                entryDate={member.fecha_entrada}
                position={props.position}
              />
            </span>
          </div>
          <div className="flex h-5 w-full items-center justify-center gap-2">
            {member.redes.map((net) => {
              const logoMonoUrl = net.red.logo_monocromatico?.url;
              return (
                <Link
                  key={net.id}
                  href={net.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-75"
                >
                  <Image
                    key={net.id}
                    src={`${CMS_URL}${logoMonoUrl}`}
                    alt={net.red.nombre}
                    className="size-5"
                    width={32}
                    height={32}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-xl text-white transition-colors hover:bg-[#491288]"
          >
            <Link href={`/miembros/${props.slug}`}>Ver Portafolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
