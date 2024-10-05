import { Hono } from "hono";
import bcrypt from "bcrypt-edge";
import db from "@/lib/db";
import { users } from "@/lib/db/schema/session";
import { eq } from "drizzle-orm";

const authRoutes = new Hono()
	.post("/login", async (c) => {
		const { username, password } = await c.req.json();

		const user = await db
			.select()
			.from(users)
			.where(eq(users.username, username))
			.then((data) => data[0]);

		if (!user) return c.json({ message: "User not found" }, 404);

		if (!bcrypt.compareSync(password, user.password as string))
			return c.json({ message: "Invalid password" }, 401);

		return c.json(user);
	})
	.get("/test", (c) => {
		return c.text("Hello, World!");
	});

export default authRoutes;
