import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CMS_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000"}/api`;

export const QUERY_KEYS = {
  EVENTS: "events",
  POPULATED_EVENTS: "populated-events",
  PROJECTS: "projects",
  POPULATED_PROJECTS: "populated-projects",
  MEMBERS: "members",
  POPULATED_MEMBERS: "populated-members",
};
