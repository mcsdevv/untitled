// * Libraries
import useSWR from "swr";

// * Helpers

import { fetcher } from "@lib/client/fetcher";

export const use1Minute = () => {
  const { data: metrics } = useSWR("/api/reports/1minute", fetcher);

  return { metrics };
};