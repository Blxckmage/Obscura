import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import { bearerAuth } from "hono/bearer-auth";

export const runtime = "edge";

const token = process.env.NEXT_PUBLIC_API_KEY as string;

const app = new Hono()
	.basePath("/api")
	.use("*", bearerAuth({ token }))
	.use(logger())
	.use(cors())
	.route("/users", userRoutes)
	.route("/authenticate", authRoutes);

export const GET = handle(app);
export const POST = handle(app);
