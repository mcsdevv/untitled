interface LogMetricProps {
  query: string;
  neonLatency: number;
  supabaseLatency: number;
  planetscaleLatency: number;
}

export const logMetric = ({
  query,
  neonLatency,
  planetscaleLatency,
  supabaseLatency,
}: LogMetricProps) => {
  console.log([
    `Query Type: ${query}`,
    `Neon Latency: ${neonLatency}ms`,
    `Supabase Latency: ${supabaseLatency}ms`,
    `Planetscale Latency: ${planetscaleLatency}ms`,
  ]);
};
