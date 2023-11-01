import { FC } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

import { Button } from "../ui/button";

interface Props {
  current: number;
  length: number;
  onNext: () => void;
  onPrev: () => void;
}

export const CarouselControls: FC<Props> = ({
  current,
  length,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex h-10 w-full items-center justify-between overflow-hidden rounded-b-sm bg-muted">
      <Button
        onClick={onPrev}
        size="icon"
        className="h-full rounded-b-sm rounded-r-none rounded-t-none hover:bg-white hover:text-muted focus:bg-white focus:text-muted"
      >
        <BiSolidChevronLeft />
      </Button>
      <span className="flex items-center gap-1 text-center text-white">
        <p className="text-white">{current + 1}</p>/
        <p className="text-white">{length}</p>
      </span>
      <Button
        onClick={onNext}
        size="icon"
        className="h-full rounded-b-sm rounded-l-none rounded-t-none hover:bg-white hover:text-muted focus:bg-white focus:text-muted"
      >
        <BiSolidChevronRight />
      </Button>
    </div>
  );
};
