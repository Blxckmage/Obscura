CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text,
	"password" text,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now()
);
