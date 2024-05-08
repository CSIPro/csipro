import { z } from "zod";

import { Media } from "./media";
import { Member } from "./members";

export const Event = z.object({
  id: z.string(),
  tipo: z.string(),
  titulo: z.string(),
  fecha: z.string().datetime(),
  hora: z.string().datetime(),
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
