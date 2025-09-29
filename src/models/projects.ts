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
  id: z.number(),
  nombre: z.string(),
  participantes: z.number().array(),
  tipo_sistema: ProjectType,
  subtitulo: z.string(),
  descripcion: z.object({}).passthrough().nullable(),
  imagen_principal: z.number(),
  imagenes_secundarias: z.number().array(),
  tecnologias: z.object({ id: z.string(), tecnologia: z.number() }).array(),
  fecha_inicio: z.string().datetime(),
  fecha_termino: z.string().datetime().nullable(),
  estado: ProjectStatus,
  url: z.string().nullable(),
  github_url: z.string().nullable(),
  color: z.string().optional(),
});

export type Project = z.infer<typeof Project>;

export const PopulatedProject = Project.extend({
  participantes: z.array(z.lazy(() => Member)),
  imagen_principal: Media,
  imagenes_secundarias: z.array(Media).optional(),
  tecnologias: z.array(z.object({ id: z.string(), tecnologia: Technology })),
});

export type PopulatedProject = z.infer<typeof PopulatedProject>;
