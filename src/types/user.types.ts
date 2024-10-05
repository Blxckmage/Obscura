import { z } from "zod";

export const userSchema = z.object({
	id: z.string().nullable().optional(),
	username: z
		.string()
		.min(3, {
			message: "Username must be at least 3 characters long",
		})
		.trim()
		.max(20, {
			message: "Username must be at most 20 characters long",
		}),
	password: z
		.string()
		.min(8, { message: "Be at least 8 characters long" })
		.regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
		.trim(),
	createdAt: z.string().nullable().optional(),
	updatedAt: z.string().nullable().optional(),
});

export type User = z.infer<typeof userSchema>;
