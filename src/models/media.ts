import { z } from "zod";

export const Media = z.object({
  id: z.string(),
  alt: z.string(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  sizes: z.object({
    thumbnail: z.object({
      width: z.number(),
      height: z.number(),
      mimeType: z.string(),
      filesize: z.number(),
      filename: z.string(),
      url: z.string(),
    }),
    card: z.object({
      width: z.number(),
      height: z.number(),
      mimeType: z.string(),
      filesize: z.number(),
      filename: z.string(),
      url: z.string(),
    }),
    tablet: z.object({
      width: z.number(),
      height: z.number(),
      mimeType: z.string(),
      filesize: z.number(),
      filename: z.string(),
      url: z.string(),
    }),
  }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Media = z.infer<typeof Media>;
