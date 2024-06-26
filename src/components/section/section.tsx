import { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  classNameDiv?: string;
}

export const Section: FC<Props> = (props) => {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-4",
        props.className,
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-6xl flex-col items-center justify-center gap-4 lg:border-x lg:border-white lg:border-opacity-10",
          props.classNameDiv,
        )}
      >
        {props.children}
      </div>
    </section>
  );
};
