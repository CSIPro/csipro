import { CollectionConfig } from "payload/types";
import { z } from "zod";

import { mediaSchema } from "./media";

export const eventSchema = z.object({
  image: mediaSchema,
  title: z.string(),
  subtitle: z.string(),
  description: z.array(
    z.object({ children: z.array(z.object({ text: z.string() })) }),
  ),
  date: z.string(),
  link: z.string().url().optional(),
});

export const EventsCollection: CollectionConfig = {
  slug: "events",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "link",
      type: "text",
    },
  ],
};
