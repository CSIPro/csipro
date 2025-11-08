import { z } from "zod";

import { Degree } from "./carrera";
import { Media } from "./media";
import { PersonalInterest } from "./personal-interest";
import { Position } from "./positions";
import { Project } from "./projects";
import { PopulatedSocialMedia, SocialMedia } from "./social-media";
import { PopulatedTechnology, Technology } from "./technology";

export const Member = z.object({
  id: z.number(),
  nombres: z.string(),
  apellidos: z.string(),
  fecha_nacimiento: z.string().datetime().nullable(),
  email: z.string().email(),
  redes: z.array(
    z.object({
      id: z.string(),
      red: SocialMedia,
      link: z.string().url(),
    }),
  ),
  portfolio: z.string().url().nullable(),
  sobre_mi: z.object({}).passthrough().nullable(),
  estado: z.enum(["activo", "egresado", "inactivo"]).default("activo"),
  slug: z.string(),
  fecha_entrada: z.string().datetime().nullable(),
  fecha_salida: z.string().datetime().nullable(),
  foto: Media,
  "fotos-secundarias": Media.array(),
  carrera: Degree.nullable(),
  tecnologias: Technology.array(),
  cargo: Position.or(z.string()).nullable(),
  intereses: PersonalInterest.array(),
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
  redes: z
    .object({
      id: z.string(),
      red: PopulatedSocialMedia,
      link: z.string().url(),
    })
    .array(),
  tecnologias: PopulatedTechnology.array(),
});
export type PopulatedMember = z.infer<typeof PopulatedMember>;
