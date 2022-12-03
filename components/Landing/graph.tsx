"use client";

// * Libraries
import {
  AreaChart,
  Card,
  Divider,
  Flex,
  Legend,
  Text,
  Title,
} from "@tremor/react";

// * Hooks
import { use1Minute } from "@hooks/use-1minute";

const valueFormatter = (number: number) => `${number}ms`;

export default function Graphs() {
  const { metrics } = use1Minute();
  console.log("metrics", metrics);
  return (
    <div className="flex w-full">
      <Card maxWidth="max-w-6xl">
        <Flex>
          <Title>Execution Duration (ms) - Get First User</Title>
          <Legend
            categories={["Neon", "Supabase", "Planetscale"]}
            colors={["blue", "green", "purple"]}
            marginTop="mt-0"
          />
        </Flex>
        {metrics ? (
          <AreaChart
            data={metrics}
            dataKey="timestamp"
            categories={["Neon", "Supabase", "Planetscale"]}
            colors={["blue", "green", "purple"]}
            showXAxis={true}
            showYAxis={true}
            showLegend={false}
            startEndOnly={false}
            valueFormatter={valueFormatter}
            height="h-96"
            yAxisWidth="w-14"
            marginTop="mt-4"
          />
        ) : null}
        <Divider />
        <Text>
          This graph is generated from metrics recorded every minute. Each
          minute, the same query is run against all database providers, running
          all in the same region, and the time it take to execute the query
          recorded.
        </Text>
      </Card>
    </div>
  );
}
