// * Libraries
import useSWR from "swr";

// * Helpers

import { fetcher } from "@lib/client/fetcher";

export const use10Minutes = () => {
  let { data: metrics10Minutes } = useSWR("/api/reports/10minutes", fetcher);

  console.log("10m metrics", metrics10Minutes);

  return { metrics10Minutes };
};
