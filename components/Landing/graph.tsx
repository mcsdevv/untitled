"use client";

// * Libraries
// import { useState } from "react";
import {
  AreaChart,
  Card,
  Divider,
  Flex,
  Legend,
  // SelectBox,
  // SelectBoxItem,
  Text,
  Title,
} from "@tremor/react";

// * Hooks
import { use1Minute } from "@hooks/use-1minute";

const valueFormatter = (number: number) => `${number}ms`;

export default function Graphs() {
  // const [duration, setDuration] = useState("1 Minute");
  const { metrics } = use1Minute();
  return (
    <div className="flex w-full">
      <Card maxWidth="max-w-6xl">
        <Flex>
          <Title>Execution Duration (ms) - Get First User Every Minute</Title>
          <Legend
            categories={["Neon", "Supabase", "Planetscale"]}
            colors={["blue", "green", "purple"]}
            marginTop="mt-0"
          />
          {/* <SelectBox
            defaultValue="1 Minute"
            handleSelect={(v) => setDuration(v)}
            maxWidth="max-w-xs"
          >
            <SelectBoxItem value="1 Minute" text="1 Minute"></SelectBoxItem>
            <SelectBoxItem value="6 Minutes" text="6 Minutes"></SelectBoxItem>
            <SelectBoxItem value="15 Minutes" text="15 Minutes"></SelectBoxItem>
          </SelectBox> */}
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
          all in the same region, and the time it takes to execute the query
          recorded.
        </Text>
      </Card>
    </div>
  );
}
