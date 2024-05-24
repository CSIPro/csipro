"use client";
import { HTMLAttributes } from "react";
import TypewriterEffect from "typewriter-effect";

import { cn } from "@/lib/utils";

import { BrandingHeaderHighlight } from "../branding-header/branding-header";

interface TypewriterProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  text: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, className }) => {
  return (
    <BrandingHeaderHighlight className={cn("font-medium", className)}>
      <TypewriterEffect
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
        options={{
          cursor: "",
          delay: 50,
        }}
      />
    </BrandingHeaderHighlight>
  );
};
