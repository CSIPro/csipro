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
        "flex h-80 max-h-fit w-full flex-col items-center rounded-md border border-gray-300 md:h-[28rem]",
        props.className,
      )}
    >
      <div className="relative flex h-full w-full overflow-hidden rounded-t-md bg-primary">
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
