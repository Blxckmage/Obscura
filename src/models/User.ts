import { z } from "zod";

const userProfileSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string(),
  emailVerified: z.date().nullable(),
  image: z.string().nullable(),
});

export type ProfileUser = z.infer<typeof userProfileSchema>;
