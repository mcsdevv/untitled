// * Libraries
import { application } from "@lib/api/prisma";

interface RecordMetricProps {
  query: string;
  neonLatency: number;
  supabaseLatency: number;
  planetscaleLatency: number;
}

export const recordMetricWarm = async ({
  query,
  neonLatency,
  planetscaleLatency,
  supabaseLatency,
}: RecordMetricProps) => {
  const metric = await application.metricsWarm.create({
    data: {
      query,
      neonLatency,
      planetscaleLatency,
      supabaseLatency,
    },
  });
  return metric;
};

export const recordMetricCold = async ({
  query,
  neonLatency,
  planetscaleLatency,
  supabaseLatency,
}: RecordMetricProps) => {
  const metric = await application.metricsCold.create({
    data: {
      query,
      neonLatency,
      planetscaleLatency,
      supabaseLatency,
    },
  });
  return metric;
};
