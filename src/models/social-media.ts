import { z } from "zod";

import { Media } from "./media";

export const SocialMedia = z.object({
  id: z.number(),
  nombre: z.string(),
  logo: Media.or(z.string()),
  logo_monocromatico: Media.or(z.string()),
});

export type SocialMedia = z.infer<typeof SocialMedia>;
