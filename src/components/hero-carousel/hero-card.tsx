"use client";

import { motion } from "framer-motion";
import { FC, ReactNode, useContext } from "react";

import { cn } from "@/lib/utils";

import { HeroContext } from "./hero-context";

interface Props {
  children: ReactNode;
  imageId: number;
}

export const HeroCard: FC<Props> = (props) => {
  const context = useContext(HeroContext);
  const imageIndex = context.findCardIndex(props.imageId);
  const scale = Math.max(
    1 - imageIndex * context.scaleFactor,
    context?.minScale,
  );
  const zIndex = context.images.length - imageIndex;
  const translateY = Math.min(
    imageIndex * context.translateFactor,
    context.minTranslate,
  );
  const brightness = Math.max(1 - imageIndex * 0.4, 0.2);
  return (
    <motion.div
      className={cn(
        "absolute aspect-video w-full overflow-hidden rounded-lg sm:rounded-2xl",
      )}
      animate={{
        scale: scale,
        zIndex: zIndex,
        translateY: `${translateY}rem`,
        filter: `brightness(${brightness})`,
      }}
      transition={{ duration: 2 }}
    >
      {props.children}
    </motion.div>
  );
};
