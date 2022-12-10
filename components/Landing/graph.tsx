"use client";

// * Libraries
import { useState } from "react";
import {
  AreaChart,
  Card,
  Divider,
  Flex,
  Legend,
  SelectBox,
  SelectBoxItem,
  Text,
  Title,
} from "@tremor/react";

// * Hooks
import { use1Minute } from "@hooks/use-1minute";
import { use10Minutes } from "@hooks/use-10minutes";

const valueFormatter = (number: number) => `${number}ms`;

export default function Graphs() {
  const [reportShown, setReportShown] = useState("warm");
  const { metrics1Minute } = use1Minute();
  const { metrics10Minutes } = use10Minutes();
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
          <SelectBox
            defaultValue="warm"
            handleSelect={(v) => setReportShown(v)}
            maxWidth="max-w-xs"
          >
            <SelectBoxItem value="warm" text="Warm Hits (1m)"></SelectBoxItem>
            <SelectBoxItem value="cold" text="Cold Hits (10m)"></SelectBoxItem>
          </SelectBox>
        </Flex>
        {metrics1Minute && metrics10Minutes ? (
          <AreaChart
            data={reportShown === "warm" ? metrics1Minute : metrics10Minutes}
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
          {reportShown === "warm"
            ? "This graph is generated from metrics recorded every minute. Each minute, the same query is run against all database providers, running all in the same region, and the time it takes to execute the query recorded."
            : "This graph is generated from metrics recorded every ten minutes. Every ten minutes, the same query is run against all database providers, running all in the same region, and the time it takes to execute the query recorded."}
        </Text>
      </Card>
    </div>
  );
}
