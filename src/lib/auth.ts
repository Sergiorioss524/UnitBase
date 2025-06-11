import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function isHost() {
  const { userId } = await auth();
  
  if (!userId) {
    return false;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  return user?.role === "host";
}

export async function requireHost() {
  const isUserHost = await isHost();
  
  if (!isUserHost) {
    throw new Error("Unauthorized: Host access required");
  }
} 