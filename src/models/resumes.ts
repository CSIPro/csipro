import { z } from "zod";

export const Resume = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  thumbnailURL: z.string().nullable(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Resume = z.infer<typeof Resume>;
