import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

import { keywordSchema } from "@/payload/collections/page";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateKeywords(keywords?: z.infer<typeof keywordSchema>[]) {
  if (!keywords) return "";

  return keywords.map((kw) => kw.keyword).join(", ");
}
