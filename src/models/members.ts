import { z } from "zod";

import { Media } from "./media";
import { Position } from "./positions";
import { SocialMedia } from "./social-media";

export const Member = z.object({
  id: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  email: z.string().email(),
  redes: z.array(
    z.object({
      id: z.string(),
      nombre: SocialMedia,
      link: z.string().url(),
    }),
  ),
  fecha_entrada: z.string().datetime(),
  cargo: Position.or(z.string()),
  foto: Media.or(z.string()),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Member = z.infer<typeof Member>;
