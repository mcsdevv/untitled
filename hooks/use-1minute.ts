// * Libraries
import useSWR from "swr";

// * Helpers

import { fetcher } from "@lib/client/fetcher";

export const use1Minute = () => {
  let { data: metrics1Minute } = useSWR("/api/reports/1minute", fetcher);

  console.log("1m metrics", metrics1Minute);

  return { metrics1Minute };
};
