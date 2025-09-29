import { z } from "zod";

export const Position = z.object({
  id: z.number(),
  nombre: z.string(),
});

export type Position = z.infer<typeof Position>;
