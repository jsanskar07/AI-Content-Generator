//import type { Config } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.tsx",
  dbCredentials : {
    url: 'postgresql://Ai-contenr_owner:eufWYK0Q2rsZ@ep-wild-morning-a1zp7lw4.ap-southeast-1.aws.neon.tech/Ai-contenr?sslmode=require'
  }
};