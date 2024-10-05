import { Hono } from "hono";
import { handle } from "hono/vercel";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";

export const runtime = "edge";

const app = new Hono()
	.basePath("/api")
	.route("/users", userRoutes)
	.route("/authenticate", authRoutes);

export const GET = handle(app);
export const POST = handle(app);
