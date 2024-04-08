import { db } from "@/db";
import { users } from "@/db/schema/user";
import { eq } from "drizzle-orm";

export const getUserById = async (id: string) => {
  const [user] = await db.select().from(users).where(eq(users.id, id));
  return user;
};
