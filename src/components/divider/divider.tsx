import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Divider: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "flex w-full items-center justify-between gap-4",
        props.className,
      )}
    >
      <hr className="w-full border-primary" />
      <h2 className="whitespace-nowrap text-xl text-primary">{children}</h2>
      <hr className="w-full border-primary" />
    </span>
  );
};
