import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const GlowContainer: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn("absolute -z-10 size-full opacity-50 blur-2xl", className)}
    >
      {children}
    </div>
  );
};

const glowSizes = {
  small: "size-[72vw] sm:size-[24vw]",
  normal: "size-[100vw] sm:size-[40vw]",
};

interface GlowProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  breathe?: boolean;
  size?: keyof typeof glowSizes;
}

export const Glow: FC<GlowProps> = ({
  className,
  breathe = false,
  size = "normal",
}) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 size-[100vw] origin-center -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgb(95,54,190)_0%,rgb(23,23,23)_62%)] blur-3xl [clip-path:ellipse(50%_30%_at_50%_50%)] sm:size-[40vw]",
        glowSizes[size],
        className,
        breathe && "animate-breathe",
      )}
    ></div>
  );
};

interface GlowGroupProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  turn?: boolean;
}

export const GlowGroup: FC<GlowGroupProps> = ({
  children,
  className,
  turn = false,
}) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 size-full",
        turn && "animate-about-turn",
        className,
      )}
    >
      {children}
    </div>
  );
};