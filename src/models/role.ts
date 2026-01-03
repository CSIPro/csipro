import { z } from "zod";

export const Role = z.object({
  id: z.number(),
  role: z.string(),
  description: z.string().nullable(),
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
});

export type Role = z.infer<typeof Role>;
