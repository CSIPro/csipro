import { z } from "zod";

import { Media } from "./media";
import { Member } from "./members";
import { SocialMedia } from "./social-media";

export const EventDate = z.object({
  id: z.string(),
  fecha_hora: z.string().datetime(),
});

export type EventDate = z.infer<typeof EventDate>;

export const Attendant = z.object({
  id: z.string(),
  nombre: z.string(),
  apellido: z.string(),
  email: z.string(),
  expediente: z.string().optional(),
});

export const EventRequirement = z.object({
  id: z.string(),
  nombre_requisito: z.array(z.object({})),
  detalles: z.array(z.object({})).optional(),
});

export const EventPost = z.object({
  id: z.string(),
  link: z.string(),
  titulo_publicacion: z.string(),
  red_social: SocialMedia,
});

export const Event = z.object({
  id: z.string(),
  tipo: z.string(),
  titulo: z.string(),
  fechas_horas: z.array(EventDate),
  descripcion: z.array(z.object({})).optional(),
  asistentes: z.array(Attendant),
  requisitos: z.array(EventRequirement),
  publicaciones: z.array(EventPost),
  lugar: z.string(),
  duracion: z.number(),
  cupos: z.number(),
  participantes: z.array(Member),
  imagen_principal: Media,
  imagenes_secundarias: z.array(Media),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Event = z.infer<typeof Event>;
