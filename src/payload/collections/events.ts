import { CollectionConfig } from "payload/types";
import { z } from "zod";

import { eventTypeSchema } from "./event-types";
import { mediaSchema } from "./media";

export const eventSchema = z.object({
  id: z.string(),
  image: mediaSchema,
  type: eventTypeSchema,
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
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "date"],
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "type",
      type: "relationship",
      relationTo: "event-types",
      hasMany: false,
      index: true,
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
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "link",
      type: "text",
    },
  ],
};
