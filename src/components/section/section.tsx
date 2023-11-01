import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Section: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        "grid w-full max-w-4xl grid-cols-1 items-center gap-2 p-2 md:grid-cols-3",
        props.className,
      )}
    >
      {children}
    </section>
  );
};
