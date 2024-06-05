import { z } from "zod";

import { Media } from "./media";
import { Member } from "./members";

export const Project = z.object({
  id: z.string(),
  nombre: z.string(),
  participantes: z.array(Member),
  tipo_sistema: z.string(),
  descripcion: z.string(),
  imagen_principal: Media,
  imagenes_secundarias: z.array(Media),
  tecnologias: z.array(z.string()),
  fecha_incio: z.string().datetime(),
  fecha_termino: z.string().datetime(),
  estado: z.string(),
  url: z.string(),
  github_url: z.string(),
  color: z.string(),
});

export type Project = z.infer<typeof Project>;
