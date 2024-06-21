import * as z from 'zod';

export const filterFormScheme = z
  .object({
    authorId: z.number(),
    locationId: z.number(),
    yearsFrom: z.number(),
    yearsTo: z.number(),
  })
  .partial();

export type FilterFormScheme = z.infer<typeof filterFormScheme>;
