import { z } from "zod";

import { Media } from "./media";
import { Position } from "./positions";
import { Project } from "./projects";
import { SocialMedia } from "./social-media";

export const Member = z.object({
  id: z.number(),
  nombres: z.string(),
  apellidos: z.string(),
  email: z.string().email(),
  redes: z.array(
    z.object({
      id: z.string(),
      red: SocialMedia,
      link: z.string().url(),
    }),
  ),
  fecha_entrada: z.string().datetime().nullable(),
  fecha_salida: z.string().datetime().nullable(),
  foto: Media,
  cargo: Position.or(z.string()),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Member = z.infer<typeof Member>;

export const PopulatedMember = Member.extend({
  proyectos: z.object({
    docs: z.array(z.lazy(() => Project)),
    hasNextPage: z.boolean(),
    totalDocs: z.number(),
  }),
});
export type PopulatedMember = z.infer<typeof PopulatedMember>;
