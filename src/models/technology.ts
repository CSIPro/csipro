import { z } from "zod";

import { Media } from "./media";

export const Technology = z.object({
  id: z.number(),
  nombre: z.string(),
  logo: Media,
  logo_monocromatico: Media,
});

export type Technology = z.infer<typeof Technology>;
