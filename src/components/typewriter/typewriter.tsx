"use client";
import { HTMLAttributes } from "react";
import TypewriterLive from "typewriter-effect";

import { cn } from "@/lib/utils";

interface TypewriterProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  text: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, className }) => {
  return (
    <span
      className={cn(
        "flex flex-wrap bg-primary p-1 text-center font-medium text-primary text-white",
        className,
      )}
    >
      <TypewriterLive
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
        options={{
          cursor: "",
          delay: 50,
        }}
      />
    </span>
  );
};
