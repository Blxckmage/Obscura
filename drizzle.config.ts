import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/lib/db/schema/*",
	dialect: "postgresql",
	out: "./drizzle",
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
});
