import { z } from "zod";

export const PersonalInterest = z.object({
  id: z.string(),
  interes: z.string(),
});

export type PersonalInterest = z.infer<typeof PersonalInterest>;
