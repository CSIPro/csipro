import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const NavigationLink: FC<
  HTMLAttributes<HTMLAnchorElement> & LinkProps
> = ({ className, children, ...props }) => {
  return (
    <Link
      className={cn(
        "relative inline-block overflow-hidden px-2 py-1 font-sans text-base font-normal",
        "before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:-translate-x-[105%] before:bg-primary before:transition-transform before:duration-300 before:ease-in-out before:will-change-transform hover:before:translate-x-0 focus:before:translate-x-0",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};
