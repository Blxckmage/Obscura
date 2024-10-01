import { Hono } from "hono";
import { handle } from "hono/vercel";
import userRoutes from "./routes/user.route";

const app = new Hono().basePath("/api").route("/users", userRoutes);

export const GET = handle(app);
export const POST = handle(app);
