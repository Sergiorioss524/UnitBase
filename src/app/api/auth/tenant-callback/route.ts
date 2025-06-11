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
      // Create new user with tenant role
      await db.insert(users).values({
        id: userId,
        role: "tenant",
      });
    } else {
      // Update existing user to tenant role
      await db
        .update(users)
        .set({ role: "tenant" })
        .where(eq(users.id, userId));
    }

    return NextResponse.redirect(new URL("/tenant", process.env.NEXT_PUBLIC_APP_URL));
  } catch (error) {
    console.error("Error in tenant callback:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 