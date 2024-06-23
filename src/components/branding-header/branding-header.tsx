import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const BrandingHeader: FC<Props> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "flex select-none flex-nowrap items-center justify-center gap-1 text-base font-semibold uppercase xl:text-lg",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BrandingHeaderTitle: FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={cn("whitespace-nowrap text-muted dark:text-white", className)}
    >
      {children}
    </h1>
  );
};

export const BrandingHeaderHighlight: FC<Props> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "rounded bg-primary px-1 text-center tracking-wide text-white",
        className,
      )}
    >
      {children}
    </span>
  );
};
