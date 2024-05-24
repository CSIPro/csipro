import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
}

export const SectionTitle: FC<Props> = ({ children, className }) => {
  return (
    <div className="flex w-full py-4 md:justify-center">
      <h2
        className={cn(
          "bg-primary p-2 text-xl font-medium uppercase text-white",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
};
