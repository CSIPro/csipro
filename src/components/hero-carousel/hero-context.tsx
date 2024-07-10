"use client";

import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export interface HeroImage {
  id: number;
  url: string;
}

interface HeroContextProps {
  images: Array<HeroImage>;
  isMobile: boolean;
}

export const HeroContext = createContext<HeroContextProps | null>(null);

interface ProviderProps {
  children: ReactNode;
  images: Array<HeroImage>;
}

export const HeroContextProvider: FC<ProviderProps> = (props) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [images, setImages] = useState(props.images);
  useEffect(() => {
    setInterval(() => {
      setImages((prevImages) => {
        const first = prevImages.shift();
        prevImages.push(first!);
        return [...prevImages];
      });
    }, 5000);
  }, []);

  return (
    <HeroContext.Provider value={{ images: images, isMobile: isMobile }}>
      {props.children}
    </HeroContext.Provider>
  );
};
