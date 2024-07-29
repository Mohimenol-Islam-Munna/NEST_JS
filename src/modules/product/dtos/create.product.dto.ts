import { z } from 'zod';

export const createProductSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  body: z.string(),
  review: z.string().optional(),
  rating: z.number().optional(),
  published: z.boolean(),
});

export type createProductDto = z.infer<typeof createProductSchema>;
