import { CollectionConfig } from "payload/types";
import { z } from "zod";

import { mediaWrapperSchema } from "./featured-media";

export const keywordSchema = z.object({
  id: z.string(),
  keyword: z.string(),
});

export const pageSchema = z.object({
  id: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  metaKeywords: keywordSchema.array().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  featuredMedia: mediaWrapperSchema.array(),
});

export const PageCollection: CollectionConfig = {
  slug: "pages",
  admin: {
    defaultColumns: ["title", "subtitle"],
  },
  fields: [
    {
      name: "metaTitle",
      type: "text",
      required: true,
      label: "Meta Title",
    },
    {
      name: "metaDescription",
      type: "text",
      required: true,
      label: "Meta Description",
    },
    {
      name: "metaKeywords",
      type: "array",
      label: "Meta Keywords",
      fields: [
        {
          name: "keyword",
          type: "text",
          required: true,
        },
      ],
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
      name: "featuredMedia",
      type: "array",
      label: "Featured Media",
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
