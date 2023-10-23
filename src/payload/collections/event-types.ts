import { CollectionConfig } from "payload/types";
import { z } from "zod";

export const eventTypeSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export const EventTypesCollection: CollectionConfig = {
  slug: "event-types",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
  ],
};
