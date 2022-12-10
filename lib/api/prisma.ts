import { PrismaClient as ApplicationClient } from "../../prisma/clients/application";
import { PrismaClient as MySqlClient } from "../../prisma/clients/mysql";
import { PrismaClient as PostgresClient } from "../../prisma/clients/postgres";

export const application = new ApplicationClient();

export const neonWarm = new PostgresClient({
  datasources: { db: { url: process.env.NEON_WARM_URL } },
});

export const supabaseWarm = new PostgresClient({
  datasources: { db: { url: process.env.SUPABASE_WARM_URL } },
});

export const planetscaleWarm = new MySqlClient({
  datasources: { db: { url: process.env.PLANETSCALE_WARM_URL } },
});

export const neonCold = new PostgresClient({
  datasources: { db: { url: process.env.NEON_COLD_URL } },
});

export const supabaseCold = new PostgresClient({
  datasources: { db: { url: process.env.SUPABASE_COLD_URL } },
});

export const planetscaleCold = new MySqlClient({
  datasources: { db: { url: process.env.PLANETSCALE_COLD_URL } },
});
