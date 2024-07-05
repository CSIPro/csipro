import { Skeleton } from "@/components/ui/skeleton";

import {
  BrandingHeader,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { ChipLabel } from "../chip/chip";

export const EventCardSkeleton = () => {
  return (
    <div className="w-full rounded-2xl border border-primary bg-[#160D2A] p-4 md:w-full xl:w-[22rem]">
      <div className="flex select-none items-center justify-between">
        <BrandingHeader>
          <BrandingHeaderTitle>
            <Skeleton className="h-[26px] w-32"></Skeleton>
          </BrandingHeaderTitle>
        </BrandingHeader>
        <ChipLabel>
          <Skeleton className="h-[26px] w-24"></Skeleton>
        </ChipLabel>
      </div>
      <div className="py-2"></div>
      <div className="flex h-14 w-full items-center justify-center">
        <h1 className="line-clamp-2 select-text space-y-2 text-center text-xl font-medium text-white">
          <Skeleton className="h-4 w-80"></Skeleton>
          <Skeleton className="h-4 w-80 "></Skeleton>
        </h1>
      </div>
      <div className="py-1"></div>
      <hr className="border-1 border-[#2D1B55]" />
      <div className="py-2"></div>
      <div className="relative h-72 w-full overflow-hidden rounded md:h-52">
        <Skeleton className="h-full w-full"></Skeleton>
      </div>
      <div className="py-1"></div>
      <ChipLabel>
        <Skeleton className="h-[26px] w-16"></Skeleton>
      </ChipLabel>
      <div className="py-0.5"></div>
      <div className="flex flex-col items-start gap-2 text-sm text-white">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span>
              <Skeleton className="h-5 w-40"></Skeleton>
            </span>
          </div>
          <span>
            <Skeleton className="h-5 w-20"></Skeleton>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Skeleton className="h-5 w-48"></Skeleton>
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Skeleton className="h-10 w-36"></Skeleton>
      </div>
    </div>
  );
};
