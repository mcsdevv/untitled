// * Libraries
import { application } from "@lib/api/prisma";

interface RecordMetricProps {
  query: string;
  neonLatency: number;
  supabaseLatency: number;
  planetscaleLatency: number;
}

export const recordMetric = async ({
  query,
  neonLatency,
  planetscaleLatency,
  supabaseLatency,
}: RecordMetricProps) => {
  const metric = await application.metrics.create({
    data: {
      query,
      neonLatency,
      planetscaleLatency,
      supabaseLatency,
    },
  });
  return metric;
};
