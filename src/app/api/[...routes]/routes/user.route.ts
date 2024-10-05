import db from "@/lib/db";
import { users } from "@/lib/db/schema/session";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "@/types/user.types";
import bcrypt from "bcrypt-edge";

const userRoutes = new Hono()
	// NOTE: GET api/users
	.get("/", async (c) => {
		const data = await db.select().from(users);

		if (data.length === 0) {
			return c.json({ message: "No users found" }, 404);
		}

		return c.json(data);
	})
	.get("/:id", async (c) => {
		const id = c.req.param("id");
		const data = await db.select().from(users).where(eq(users.id, id));

		if (data.length === 0) {
			return c.json({ message: "User not found" }, 404);
		}

		return c.json(data[0]);
	})
	.get("/username/:username", async (c) => {
		const username = c.req.param("username");
		const data = await db
			.select()
			.from(users)
			.where(eq(users.username, username));

		if (data.length === 0) {
			return c.json({ message: "User not found" }, 404);
		}

		return c.json(data[0]);
	})
	// NOTE: POST api/users
	.post(
		"/",
		zValidator("json", userSchema, (result, c) => {
			if (!result.success) {
				return c.text("Invalid data!", 400);
			}
		}),
		async (c) => {
			try {
				const { username, password } = await c.req.json();
				const hashedPassword = bcrypt.hashSync(password, 10);

				await db.insert(users).values({
					username,
					password: hashedPassword,
				});

				return c.json({ message: "User created" }, 201);
			} catch (error) {
				return c.json({ message: error }, 500);
			}
		},
	);

export default userRoutes;
