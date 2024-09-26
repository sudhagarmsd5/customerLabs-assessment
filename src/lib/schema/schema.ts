import { z } from 'zod';

const segmentSchema = z.object({
  segment_name: z.string().min(3, { message: 'Segment name must contain at least 3 character(s)' }).max(50, { message: 'Segment name must not exceed 50 character(s)' }),
  segment_options: z.any().default(null)
});

export type SegmentSchemaType = z.infer<typeof segmentSchema>;

export {
  segmentSchema,
}