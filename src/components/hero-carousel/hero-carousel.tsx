"use client";

import { FC, ReactNode } from "react";

import { HeroContextProvider, HeroImage } from "./hero-context";

interface Props {
  children: ReactNode;
  images: Array<HeroImage>;
}

export const HeroCarousel: FC<Props> = (props) => {
  return (
    <HeroContextProvider images={props.images}>
      <div className="relative aspect-video w-11/12 sm:w-8/12">
        {props.children}
      </div>
    </HeroContextProvider>
  );
};
