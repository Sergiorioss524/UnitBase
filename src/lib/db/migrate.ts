import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

async function main() {
  const db = drizzle(sql, { schema });
  
  console.log("Running migrations...");
  
  await migrate(db, { migrationsFolder: "src/lib/db/migrations" });
  
  console.log("Migrations completed!");
  
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration failed!");
  console.error(err);
  process.exit(1);
}); 