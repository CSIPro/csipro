import { z } from "zod";

export const createResponseSchema = <T extends z.ZodTypeAny>(schema: T) => {
  return z.object({
    totalDocs: z.number(),
    limit: z.number(),
    page: z.number(),
    pagingCounter: z.number(),
    hasPrevPage: z.boolean(),
    hasNextPage: z.boolean(),
    prevPage: z.number().nullable(),
    nextPage: z.number().nullable(),
    docs: z.array(schema),
  });
};

export const generateEmptyResponse = () => ({
  totalDocs: 0,
  limit: 0,
  page: 0,
  pagingCounter: 0,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
  docs: [],
});
