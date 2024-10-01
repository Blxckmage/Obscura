import { z } from "zod";

export const userSchema = z.object({
	id: z.number().nullable(),
	username: z.string().min(3).max(20),
	password: z.string().min(8),
});

export type User = z.infer<typeof userSchema>;
