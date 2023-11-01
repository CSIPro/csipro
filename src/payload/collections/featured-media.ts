import { CollectionConfig } from "payload/types";
import { z } from "zod";

import { mediaSchema } from "./media";

export const mediaWrapperSchema = z.object({
  id: z.string(),
  image: mediaSchema,
});

export const featuredMediaSchema = z.object({
  id: z.string(),
  title: z.string(),
  media: mediaWrapperSchema.array(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const FeaturedMediaCollection: CollectionConfig = {
  slug: "featured-media",
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "media",
      type: "array",
      required: true,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
