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
  POPULATED_EVENTS_INFINITE: "populated-events-infinite",
  PROJECTS: "projects",
  POPULATED_PROJECTS: "populated-projects",
  POPULATED_PROJECTS_INFINITE: "populated-projects-infinite",
  MEMBERS: "members",
  POPULATED_MEMBERS: "populated-members",
  POPULATED_MEMBERS_INFINITE: "populated-members-infinite",
};
