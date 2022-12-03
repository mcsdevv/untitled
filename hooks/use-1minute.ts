// * Libraries
import useSWR from "swr";

// * Helpers

import { fetcher } from "@lib/client/fetcher";

export const use1Minute = () => {
  let { data: metrics } = useSWR("/api/reports/1minute", fetcher);

  console.log("metrics", metrics);

  return { metrics };
};
