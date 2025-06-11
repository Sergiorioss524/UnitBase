import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Check if user exists
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, userId),
    });

    if (!existingUser) {
      // Create new user with host role
      await db.insert(users).values({
        id: userId,
        role: "host",
      });
    } else {
      // Update existing user to host role
      await db
        .update(users)
        .set({ role: "host" })
        .where(eq(users.id, userId));
    }

    return NextResponse.redirect(new URL("/dashboard", process.env.NEXT_PUBLIC_APP_URL));
  } catch (error) {
    console.error("Error in host callback:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 