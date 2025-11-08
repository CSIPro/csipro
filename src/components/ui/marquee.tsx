"use client";

import { FC, ReactNode } from "react";
import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
}

export const MarqueeWrapper: FC<Props> = ({
  children,
  className,
  direction = "left",
}) => {
  return (
    <Marquee className={cn("", className)} direction={direction}>
      {children}
    </Marquee>
  );
};

interface MarqueeItemProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export const MarqueeItem: FC<MarqueeItemProps> = ({
  children,
  className,
  innerClassName,
}) => {
  return (
    <div className={cn("relative w-full px-2 py-6", className)}>
      <div
        className={cn(
          "size-full h-48 overflow-hidden rounded-3xl border border-primary shadow-[1px_1px_10px_5px_rgba(95,54,190,0.5)] lg:h-52 xl:h-64",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};
