"use client";

import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const HeroCarousel: FC<Props> = ({ children }) => {
  return (
    <div className="relative aspect-video w-11/12 sm:w-8/12">{children}</div>
  );
};
