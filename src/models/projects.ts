import { z } from "zod";

import { Media } from "./media";
import { Member } from "./members";
import { Technology } from "./technology";

export const ProjectType = z.enum([
  "Aplicación Web",
  "Aplicación Móvil",
  "Aplicación de Escritorio",
]);

export const ProjectStatus = z.enum(["Activo", "Inactivo", "Finalizado"]);

export const Project = z.object({
  id: z.string(),
  nombre: z.string(),
  participantes: z.array(Member).optional(),
  tipo_sistema: ProjectType,
  imagen_principal: Media,
  imagenes_secundarias: z.array(Media).optional(),
  tecnologias: z
    .array(z.object({ id: z.string(), tecnologia: Technology }))
    .optional(),
  fecha_incio: z.string().datetime(),
  fecha_termino: z.string().datetime().optional(),
  estado: ProjectStatus,
  url: z.string().optional(),
  github_url: z.string().optional(),
  color: z.string().optional(),
});

export type Project = z.infer<typeof Project>;
