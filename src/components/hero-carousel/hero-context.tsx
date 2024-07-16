"use client";

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMediaQuery } from "usehooks-ts";

export interface HeroImage {
  id: number;
  url: string;
}

interface HeroContextProps {
  images: Array<HeroImage>;
  isMobile: boolean;
  scaleFactor: number;
  minScale: number;
  translateFactor: number;
  minTranslate: number;
  findCardIndex: (id: number) => number;
}

// const defaultContextValue: HeroContextProps = {
//   findCardIndex: (id: number) => -1,
//   images: [],
//   isMobile: true,
//   minScale: 0.9,
//   minTranslate: 2,
//   scaleFactor: 0.05,
//   translateFactor: 1,
// };

export const HeroContext = createContext<HeroContextProps | null>(null);

interface ProviderProps {
  children: ReactNode;
  images: Array<HeroImage>;
}

export const HeroContextProvider: FC<ProviderProps> = (props) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [images, setImages] = useState(props.images);
  const scaleFactor = isMobile ? 0.05 : 0.1;
  const minScale = isMobile ? 0.9 : 0.8;
  const translateFactor = isMobile ? 1 : 2;
  const minTranslate = isMobile ? 2 : 4;
  useEffect(() => {
    setInterval(() => {
      setImages((prevImages) => {
        const first = prevImages.shift();
        prevImages.push(first!);
        return [...prevImages];
      });
    }, 5000);
  }, []);

  const findCardIndex = (id: number) => {
    let iAux = 0;
    images.forEach((img, i) => {
      if (id === img.id) {
        iAux = i;
      }
    });
    return iAux;
  };

  return (
    <HeroContext.Provider
      value={{
        images: images,
        isMobile: isMobile,
        scaleFactor: scaleFactor,
        minScale: minScale,
        translateFactor: translateFactor,
        minTranslate: minTranslate,
        findCardIndex: findCardIndex,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
};

export const useHeroCarousel = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("No se cuenta con HeroContextProvider");
  }
  return context;
};
