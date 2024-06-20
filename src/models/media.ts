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
    thumbnail: z
      .object({
        width: z.number().optional().nullable(),
        height: z.number().optional().nullable(),
        mimeType: z.string().optional().nullable(),
        filesize: z.number().optional().nullable(),
        filename: z.string().optional().nullable(),
        url: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),
    card: z
      .object({
        width: z.number().optional().nullable(),
        height: z.number().optional().nullable(),
        mimeType: z.string().optional().nullable(),
        filesize: z.number().optional().nullable(),
        filename: z.string().optional().nullable(),
        url: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),
    tablet: z
      .object({
        width: z.number().optional().nullable(),
        height: z.number().optional().nullable(),
        mimeType: z.string().optional().nullable(),
        filesize: z.number().optional().nullable(),
        filename: z.string().optional().nullable(),
        url: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),
  }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Media = z.infer<typeof Media>;
