import { z } from "zod";

import { CMSPaginatedResponse } from "./cms-response";
import { Media } from "./media";
import { Member } from "./members";
import { SocialMedia } from "./social-media";

export const EventDate = z.object({
  id: z.string(),
  fecha_hora: z.string().datetime(),
});

export type EventDate = z.infer<typeof EventDate>;

export const Attendant = z.object({
  id: z.number(),
  nombre: z.string(),
  apellido: z.string(),
  email: z.string(),
  expediente: z.string().optional(),
});

export const EventRequirement = z.object({
  id: z.number(),
  nombre_requisito: z.array(z.object({})),
  detalles: z.array(z.object({})).optional(),
});

export const EventPost = z.object({
  id: z.number(),
  link: z.string(),
  titulo_publicacion: z.string(),
  red_social: SocialMedia,
});

export const Event = z.object({
  id: z.number(),
  tipo: z.string(),
  titulo: z.string(),
  fechas_horas: z.array(EventDate),
  descripcion: z.object({}).passthrough().nullable(),
  asistentes: z.array(Attendant),
  requisitos: z.array(EventRequirement),
  publicaciones: z.array(EventPost),
  lugar: z.string(),
  duracion: z.number(),
  cupos: z.number(),
  participantes: z.number().array(),
  imagen_principal: z.number(),
  imagenes_secundarias: z.number().array(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Event = z.infer<typeof Event>;

export const PopulatedEvent = Event.extend({
  participantes: z.array(z.lazy(() => Member)),
  imagen_principal: Media,
  imagenes_secundarias: z
    .object({
      id: z.string(),
      imagen: Media,
    })
    .array(),
});

export type PopulatedEvent = z.infer<typeof PopulatedEvent>;

export const PaginatedEventsResponse = CMSPaginatedResponse.extend({
  docs: z.array(Event),
});

export type PaginatedEventsResponse = z.infer<typeof PaginatedEventsResponse>;

export const PopulatedPaginatedEventsResponse = CMSPaginatedResponse.extend({
  docs: z.array(PopulatedEvent),
});

export type PopulatedPaginatedEventsResponse = z.infer<
  typeof PopulatedPaginatedEventsResponse
>;
