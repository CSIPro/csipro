import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Media } from "@/models/media";

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

export const getSmallestImageNotThumbnail = (image: Media) => {
  if (image.sizes?.small?.url) {
    return image.sizes.small;
  } else if (image.sizes?.medium?.url) {
    return image.sizes.medium;
  } else if (image.sizes?.large?.url) {
    return image.sizes.large;
  } else if (image.sizes?.hero?.url) {
    return image.sizes.hero;
  }

  return image;
};

export const truncateDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) {
    return description;
  }

  return (
    description.slice(0, maxLength).split(" ").slice(0, -1).join(" ") + "..."
  );
};
