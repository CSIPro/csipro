import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const StyledLink: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => (
  <Link
    {...props}
    className={cn(
      "rounded-full bg-primary px-8 py-2 text-white transition-all hover:scale-105 hover:brightness-105",
      className,
    )}
  >
    {children}
  </Link>
);
