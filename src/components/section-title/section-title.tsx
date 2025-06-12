import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
  id?: string;
}

export const SectionTitle: FC<Props> = ({ children, className, id }) => {
  return (
    <div className="flex w-full py-4">
      <h2
        id={id}
        className={cn(
          "min-w-72 bg-primary p-2 text-center text-xl font-medium uppercase text-white",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
};
