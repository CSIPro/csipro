"use client";
/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import { useEffect, useRef, useState } from 'react';
import { DiTerminal } from "react-icons/di";

import { Button } from "@/components/ui/button";
import { SocialMedia } from "@/models/social-media";

import { Position } from "./../../models/positions";
import { MemberBadge } from "./member-badge";

type MappedNetworks = {
  id: string;
  link: string;
  social_media: SocialMedia;
};

interface MemberCardProps {
  names: string;
  lastnames: string;
  email: string;
  networks: Array<MappedNetworks>;
  entrydate: string;
  photo: string;
  photoalt: string;
  position: Array<Position>;
}

const MemberCard: React.FC<MemberCardProps> = (props) => {
  const entryDateObj = new Date(props.entrydate);
  const formattedDate = entryDateObj.toLocaleString('default', { month: 'short' }) + ' ' + entryDateObj.getFullYear();
  const NameDisplay: React.FC<{ names: string; lastnames: string }> = ({ names, lastnames }) => {
  const [displayName, setDisplayName] = useState(`${names} ${lastnames}`);
  const textRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
      if (!textRef.current) return;

      const checkFit = () => {
        const maxWidth = 250;
        const element = textRef.current;

        if (element && element.scrollWidth <= maxWidth) {
          return;
        }

        const namesArray = names.split(' ');
        const lastnamesArray = lastnames.split(' ');

        if (namesArray.length > 1) {
          const shortName = `${namesArray[0]} ${lastnames}`;
          if (element) {
            element.textContent = shortName;
            if (element.scrollWidth <= maxWidth) {
              setDisplayName(shortName);
              return;
            }
          }
        }
        if (lastnamesArray.length > 1) {
          const shortLastname = `${names} ${lastnamesArray[0]}`;
          if (element) {
            element.textContent = shortLastname;
            if (element.scrollWidth <= maxWidth) {
              setDisplayName(shortLastname);
              return;
            }
          }
        }
        const minimalName = `${namesArray[0]} ${lastnamesArray[0]}`;
        setDisplayName(minimalName);
      };

      checkFit();
    }, [names, lastnames]);

    return (
      <h1 
        ref={textRef} 
        className="text-center text-xl font-bold text-white whitespace-nowrap"
      >
        {displayName}
      </h1>
    );
  };
  return (
    <div className="w-[280px] h-full bg-[#16131F] px-[15px] py-[19px]">
      <div className="relative w-full overflow-hidden rounded h-52">
        <Image
          fill
          src={props.photo}
          alt={props.photoalt}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 items-center">
        <div className="flex flex-col items-center justify-center gap-3 py-4">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-center text-xl font-bold text-white">
              <NameDisplay names={props.names} lastnames={props.lastnames} />
            </h1>
          </div>
          <div className="flex w-full items-center justify-center">
            <h1 className="text-center text-sm font-normal text-white">
              <MemberBadge entryDate={props.entrydate} position={props.position} />
            </h1>

          </div>
          <div className="flex w-full items-center justify-center gap-6">
            {props.networks.map((net) => {
              const logoMonoUrl = typeof net.social_media.logo_monocromatico === 'string' 
                ? net.social_media.logo_monocromatico
                : net.social_media.logo_monocromatico?.url;
              return (
                <Link 
                  key={net.id}
                  href={net.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Image
                    key={net.id}
                    src={`https://admin.csipro.isi.unison.mx${logoMonoUrl}`}
                    alt={net.social_media.nombre}
                    className="size-5"
                    width={32}
                    height={32}
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      (e.currentTarget as HTMLImageElement).src = '/default-social-icon.png';
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="border-[#2D1B55] border w-full"/>
        <div className="flex items-center">
          <h1 className="text-sm font-light">Miembro desde {formattedDate}</h1>
        </div>
        <div className="flex items-center gap-4">
          <DiTerminal size={30}/>
          <h1 className="text-lg font-bold">5 Proyectos</h1>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="rounded-xl">
            Ver Portafolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
