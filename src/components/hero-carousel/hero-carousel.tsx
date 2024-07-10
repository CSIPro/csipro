"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useContext } from "react";

import { cn } from "@/lib/utils";

import { HeroContext } from "./hero-context";

export const HeroCarousel: FC = () => {
  const context = useContext(HeroContext);
  const scaleFactor = context?.isMobile ? 0.05 : 0.1;
  const minScale = context?.isMobile ? 0.9 : 0.8;
  const translateFactor = context?.isMobile ? 1 : 2;
  const minTranslate = context?.isMobile ? 2 : 4;
  return (
    <div className="relative aspect-video w-11/12 sm:w-8/12">
      {context?.images.map((image, i) => {
        const scale = Math.max(1 - i * scaleFactor, minScale);
        const zIndex = context?.images.length - i;
        const translateY = Math.min(i * translateFactor, minTranslate);
        const brightness = Math.max(1 - i * 0.4, 0.2);
        return (
          <motion.div
            key={`heroCarousel ${image.id}`}
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
            <Image
              src={image.url}
              width={800}
              height={400}
              alt="foto de portada"
              className=" object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
