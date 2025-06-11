// drizzle.config.ts
import "dotenv/config";
import type { Config } from "drizzle-kit";

const url = process.env.POSTGRES_URL_NON_POOLING;
if (!url) {
  throw new Error("Missing env var POSTGRES_URL_NON_POOLING");
}

export default {
  schema: "./src/lib/db/schema.ts",
  out:    "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // use the pooler session URL (IPv4-compatible)
    url,
  },
} satisfies Config;
