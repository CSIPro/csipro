import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
  wrapperClassName?: string;
  id?: string;
}

export const SectionTitle: FC<Props> = ({
  children,
  className,
  id,
  wrapperClassName,
}) => {
  return (
    <div className={cn("flex w-full py-4", wrapperClassName)}>
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
