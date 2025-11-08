import { z } from "zod";

import { Media } from "./media";

export const Technology = z.object({
  id: z.number(),
  nombre: z.string(),
  logo: z.number(),
  logo_monocromatico: z.number(),
});

export type Technology = z.infer<typeof Technology>;

export const PopulatedTechnology = Technology.extend({
  logo: Media,
  logo_monocromatico: Media,
});

export type PopulatedTechnology = z.infer<typeof PopulatedTechnology>;
