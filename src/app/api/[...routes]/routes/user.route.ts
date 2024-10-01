import db from "@/lib/db";
import { users } from "@/lib/db/schema/users";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

const userRoutes = new Hono()
	.get("/", async (c) => {
		const data = await db.select().from(users);

		if (data.length === 0) {
			return c.json({ message: "No users found" }, 404);
		}

		return c.json(data);
	})
	.get("/:id", async (c) => {
		const id = c.req.param("id");
		const data = await db
			.select()
			.from(users)
			.where(eq(users.id, Number(id)));

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
	});

export default userRoutes;
