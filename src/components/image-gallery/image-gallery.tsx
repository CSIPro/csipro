import Image from "next/image";

import { CMS_URL, cn } from "@/lib/utils";
import { Media } from "@/models/media";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Props {
  gallery: { id: string; imagen: Media }[];
  identifier?: string;
}

export const ImageGallery = ({ gallery, identifier = "gallery" }: Props) => {
  return (
    <Carousel>
      <CarouselContent className="-ml-4 h-96 w-full lg:aspect-[7/8] lg:h-auto">
        {gallery.map((image) => (
          <CarouselItem
            key={image.id}
            className={cn(
              "basis-5/6 pl-4 lg:basis-full",
              gallery.length === 1 && "basis-full",
            )}
          >
            <div className="relative size-full overflow-hidden rounded-md">
              <picture>
                {image.imagen.sizes?.large?.url ? (
                  <source
                    srcSet={`${CMS_URL}${image.imagen.sizes.large.url}`}
                    media="(min-width: 1024px)"
                    type={image.imagen.sizes.large.mimeType || "image/webp"}
                  />
                ) : null}
                {image.imagen.sizes?.medium?.url ? (
                  <source
                    srcSet={`${CMS_URL}${image.imagen.sizes.medium.url}`}
                    media="(min-width: 768px)"
                    type={image.imagen.sizes.medium.mimeType || "image/webp"}
                  />
                ) : null}
                {image.imagen.sizes?.small?.url ? (
                  <source
                    srcSet={`${CMS_URL}${image.imagen.sizes.small.url}`}
                    media="(max-width: 767px)"
                    type={image.imagen.sizes.small.mimeType || "image/webp"}
                  />
                ) : null}
                <Image
                  src={`${CMS_URL}${image.imagen.url}`}
                  alt={image.imagen.alt}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </picture>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-lg:hidden" />
      <CarouselNext className="max-lg:hidden" />
      <CarouselNavigation name={`${identifier}`} />
    </Carousel>
  );
};
