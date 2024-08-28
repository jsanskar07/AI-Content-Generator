//import type { Config } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.tsx",
  dbCredentials : {
    url: NEXT_PUBLIC_DRIZZLE_DB_URL
  }
};