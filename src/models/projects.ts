import { z } from "zod";

import { CMSPaginatedResponse } from "./cms-response";
import { Media } from "./media";
import { Member } from "./members";
import { Role } from "./role";
import { PopulatedTechnology } from "./technology";

export const ProjectType = z.enum([
  "Aplicación Web",
  "Aplicación Móvil",
  "Aplicación de Escritorio",
]);

export const ProjectStatus = z.enum(["Activo", "Inactivo", "Finalizado"]);

export const Project = z.object({
  id: z.number(),
  nombre: z.string(),
  participantes: z
    .object({
      id: z.string(),
      miembro: z.number(),
      descripcion: z.string(),
      roles: z
        .object({
          id: z.string(),
          rol: Role,
        })
        .array(),
    })
    .array(),
  tipo_sistema: ProjectType,
  logo: z.number().nullable().optional(),
  subtitulo: z.string(),
  descripcion: z.object({}).passthrough().nullable(),
  imagen_principal: z.number(),
  imagenes_secundarias: z
    .object({ id: z.string(), imagen: z.number() })
    .array(),
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
  participantes: z
    .object({
      id: z.string(),
      miembro: z.lazy(() => Member),
      descripcion: z.string().nullable(),
      roles: z
        .object({
          id: z.string(),
          rol: Role,
        })
        .array(),
    })
    .array(),
  logo: Media.nullable().optional(),
  imagen_principal: Media,
  imagenes_secundarias: z
    .object({
      id: z.string(),
      imagen: Media,
    })
    .array(),
  tecnologias: z.array(
    z.object({ id: z.string(), tecnologia: PopulatedTechnology }),
  ),
});

export type PopulatedProject = z.infer<typeof PopulatedProject>;

export const ProjectsCount = z.object({
  active: z.number(),
  inactive: z.number(),
  finished: z.number(),
});

export type ProjectsCount = z.infer<typeof ProjectsCount>;

export const PaginatedProjectsResponse = CMSPaginatedResponse.extend({
  docs: z.array(Project),
});

export type PaginatedProjectsResponse = z.infer<
  typeof PaginatedProjectsResponse
>;

export const PopulatedPaginatedProjectsResponse = CMSPaginatedResponse.extend({
  docs: z.array(PopulatedProject),
});

export type PopulatedPaginatedProjectsResponse = z.infer<
  typeof PopulatedPaginatedProjectsResponse
>;
