"use client";
import { HTMLAttributes } from "react";
import TypewriterEffect from "typewriter-effect";

import { cn } from "@/lib/utils";

import { BrandingHeaderHighlight } from "../branding-header/branding-header";

interface TypewriterProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  messages: string[];
  loop?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  messages,
  loop = false,
  className,
}) => {
  return (
    <BrandingHeaderHighlight className={cn("font-medium uppercase", className)}>
      <TypewriterEffect
        onInit={(typewriter) => {
          if (messages.length === 0) {
            return;
          }

          typewriter.typeString(messages[0]).pauseFor(2000);

          if (messages.length > 1) {
            for (let i = 1; i < messages.length; i++) {
              typewriter.deleteAll().typeString(messages[i]).pauseFor(2000);
            }
          }

          typewriter.start();
        }}
        options={{
          cursor: "",
          delay: 50,
          loop,
        }}
      />
    </BrandingHeaderHighlight>
  );
};
