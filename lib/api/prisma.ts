import { PrismaClient as ApplicationClient } from "../../prisma/clients/application";
import { PrismaClient as MySqlClient } from "../../prisma/clients/mysql";
import { PrismaClient as PostgresClient } from "../../prisma/clients/postgres";

export const application = new ApplicationClient();

export const neon = new PostgresClient({
  datasources: { db: { url: process.env.NEON_WARM_URL } },
});

export const supabase = new PostgresClient({
  datasources: { db: { url: process.env.SUPABASE_WARM_URL } },
});

export const planetscale = new MySqlClient({
  datasources: { db: { url: process.env.PLANETSCALE_WARM_URL } },
});
