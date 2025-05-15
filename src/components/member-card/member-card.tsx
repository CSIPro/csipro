/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

import { Button } from "@/components/ui/button";

import { Position } from "./../../models/positions";
import { SocialMedia } from "./../../models/social-media";

interface MemberCardProps {
  names: string;
  lastnames: string;
  email: string;
  networks: Array<SocialMedia>;
  entrydate: string;
  photo: string;
  photoalt: string;
  position: Array<Position>;
}

const MemberCard: React.FC<MemberCardProps> = (props) => {

  return (
    <div className="w-full rounded-2xl border border-primary bg-[#160D2A] p-4 md:w-full xl:w-[22rem]">
      <div className="flex select-none items-center justify-between">
      </div>
      <div className="py-2"></div>
      <div className="flex h-14 w-full items-center justify-center">
        <h1 className="line-clamp-2 select-text text-center text-xl font-medium text-white">
          {props.names}
        </h1>
      </div>
      <div className="py-1"></div>
      <hr className="border-1 border-[#2D1B55]" />
      <div className="py-2"></div>
      <div className="relative h-72 w-full overflow-hidden rounded md:h-52">
        <Image
          fill
          src={props.photo}
          alt={props.photoalt}
          className="object-contain"
        />
      </div>
      <div className="py-1"></div>
      <div className="py-0.5"></div>
      <div className="flex flex-col items-start gap-2 text-sm text-white">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaRegCalendar />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoLocation />
          <span>{props.email}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline" className="rounded-xl">
        </Button>
      </div>
    </div>
  );
};

export default MemberCard;
