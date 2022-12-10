-- CreateTable
CREATE TABLE "MetricsWarm" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "query" TEXT NOT NULL,
    "neon_latency" INTEGER NOT NULL,
    "supabase_latency" INTEGER NOT NULL,
    "planetscale_latency" INTEGER NOT NULL,

    CONSTRAINT "MetricsWarm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricsCold" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "query" TEXT NOT NULL,
    "neon_latency" INTEGER NOT NULL,
    "supabase_latency" INTEGER NOT NULL,
    "planetscale_latency" INTEGER NOT NULL,

    CONSTRAINT "MetricsCold_pkey" PRIMARY KEY ("id")
);
