import { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
}

export const CarouselItem: FC<Props> = ({ children }) => {
  return <div className={cn("relative h-full min-w-full")}>{children}</div>;
};
