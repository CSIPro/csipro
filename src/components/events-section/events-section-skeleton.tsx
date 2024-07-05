"use client";
import { useMediaQuery } from "usehooks-ts";

import { Skeleton } from "@/components/ui/skeleton";

import { EventCardSkeleton } from "../event-card/event-card-skeleton";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export const EventSectionSkeleton = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col items-center gap-3 px-4 sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center sm:gap-4 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <Skeleton className="h-10 w-52 rounded-full"></Skeleton>
      </div>
    </div>
  ) : (
    <Carousel>
      <CarouselContent>
        {[...Array(2)].map((_, index) => (
          <CarouselItem key={index} className="basis-5/6 sm:basis-3/4">
            <EventCardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative flex w-full items-center justify-center gap-2 py-4">
        <Skeleton className="h-4 w-36"></Skeleton>
      </div>
    </Carousel>
  );
};
