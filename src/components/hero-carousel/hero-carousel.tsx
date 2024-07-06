"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

interface Props {}
const dummyImages = [
  { id: 1, url: "/portada.jpg" },
  { id: 2, url: "/portada2.jpg" },
  { id: 3, url: "/portada4.jpg" },
];

export const HeroCarousel: FC<Props> = (props) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [images, setImages] = useState(dummyImages);
  useEffect(() => {
    setInterval(() => {
      setImages((prevImages) => {
        const first = prevImages.shift();
        prevImages.push(first!);
        return [...prevImages];
      });
    }, 5000);
  }, []);
  const scaleFactor = isMobile ? 0.05 : 0.1;
  const minScale = isMobile ? 0.9 : 0.8;
  const translateFactor = isMobile ? 1 : 2;
  const minTranslate = isMobile ? 2 : 4;
  return (
    <div className="relative aspect-video w-11/12 sm:w-8/12">
      {images.map((image, i) => {
        const scale = Math.max(1 - i * scaleFactor, minScale);
        const zIndex = images.length - i;
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
