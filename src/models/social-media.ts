import { z } from "zod";

import { Media } from "./media";

export const SocialMedia = z.object({
  id: z.number(),
  nombre: z.string(),
  logo: z.number(),
  logo_monocromatico: z.number(),
});

export type SocialMedia = z.infer<typeof SocialMedia>;

export const PopulatedSocialMedia = SocialMedia.extend({
  logo: Media,
  logo_monocromatico: Media,
});

export type PopulatedSocialMedia = z.infer<typeof PopulatedSocialMedia>;
