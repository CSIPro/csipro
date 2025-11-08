import { z } from "zod";

export const Degree = z.object({
  id: z.number(),
  nombre: z.string(),
  codigo: z.string(),
  slug: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Degree = z.infer<typeof Degree>;
