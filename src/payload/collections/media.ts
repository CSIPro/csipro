import { CollectionConfig } from "payload/types";
import { z } from "zod";

export const mediaSchema = z.object({
  id: z.string(),
  title: z.string(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  width: z.number(),
  height: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  url: z.string(),
});

export const MediaCollection: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "../../public/media",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
};
