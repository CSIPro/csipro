import { z } from "zod";

import { Media } from "./media";

export const Member = z.object({
  id: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  email: z.string().email(),
  redes: z.array(
    z.object({
      id: z.string(),
      nombre: z.string(),
      link: z.string().url(),
    }),
  ),
  fecha_entrada: z.string().datetime(),
  cargo: z.string(),
  foto: Media.or(z.string()),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Member = z.infer<typeof Member>;
