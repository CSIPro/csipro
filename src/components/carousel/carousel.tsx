"use client";

import { FC, HTMLAttributes, ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

import { CarouselControls } from "./carousel-controls";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}

export const Carousel: FC<Props> = ({ children, ...props }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current === children.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current === 0) {
      setCurrent(children.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center rounded-sm border border-gray-300",
        props.className,
      )}
    >
      <div className="relative h-64 w-full overflow-hidden rounded-t-sm bg-primary md:h-80">
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-full transition-transform duration-300",
          )}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <CarouselControls
        current={current}
        length={children.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
