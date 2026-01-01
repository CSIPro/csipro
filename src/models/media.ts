import { z } from "zod";

export const GeneratedMedia = z.object({
  width: z.number().nullable(),
  height: z.number().nullable(),
  mimeType: z.string().nullable(),
  filesize: z.number().nullable(),
  filename: z.string().nullable(),
  url: z.string().nullable(),
});

export type GeneratedMedia = z.infer<typeof GeneratedMedia>;

export const Media = z.object({
  id: z.number(),
  alt: z.string(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  sizes: z
    .object({
      thumbnail: GeneratedMedia,
      small: GeneratedMedia,
      medium: GeneratedMedia,
      large: GeneratedMedia,
      hero: GeneratedMedia,
    })
    .optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Media = z.infer<typeof Media>;
