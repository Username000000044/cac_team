"use client";

import * as React from "react";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

export const description = "An interactive line chart";

const chartData = [
  { date: "2016-01-20", attacks: 135458 },
  { date: "2016-02-20", attacks: 135458 },
  { date: "2016-03-20", attacks: 135458 },
  { date: "2016-04-20", attacks: 135457 },
  { date: "2016-05-20", attacks: 135457 },
  { date: "2016-06-20", attacks: 135457 },
  { date: "2016-07-20", attacks: 135457 },
  { date: "2016-08-20", attacks: 135457 },
  { date: "2016-09-20", attacks: 135457 },
  { date: "2016-10-20", attacks: 135457 },
  { date: "2016-11-20", attacks: 135457 },
  { date: "2016-12-20", attacks: 135457 },
  { date: "2017-01-20", attacks: 100815 },
  { date: "2017-02-20", attacks: 100815 },
  { date: "2017-03-20", attacks: 100815 },
  { date: "2017-04-20", attacks: 100815 },
  { date: "2017-05-20", attacks: 100815 },
  { date: "2017-06-20", attacks: 100815 },
  { date: "2017-07-20", attacks: 100815 },
  { date: "2017-08-20", attacks: 100815 },
  { date: "2017-09-20", attacks: 100815 },
  { date: "2017-10-20", attacks: 100814 },
  { date: "2017-11-20", attacks: 100814 },
  { date: "2017-12-20", attacks: 100814 },
  { date: "2018-01-20", attacks: 65408 },
  { date: "2018-02-20", attacks: 65408 },
  { date: "2018-03-20", attacks: 65408 },
  { date: "2018-04-20", attacks: 65408 },
  { date: "2018-05-20", attacks: 65408 },
  { date: "2018-06-20", attacks: 65408 },
  { date: "2018-07-20", attacks: 65408 },
  { date: "2018-08-20", attacks: 65408 },
  { date: "2018-09-20", attacks: 65407 },
  { date: "2018-10-20", attacks: 65407 },
  { date: "2018-11-20", attacks: 65407 },
  { date: "2018-12-20", attacks: 65407 },
  { date: "2019-01-20", attacks: 39615 },
  { date: "2019-02-20", attacks: 39614 },
  { date: "2019-03-20", attacks: 39614 },
  { date: "2019-04-20", attacks: 39614 },
  { date: "2019-05-20", attacks: 39614 },
  { date: "2019-06-20", attacks: 39614 },
  { date: "2019-07-20", attacks: 39614 },
  { date: "2019-08-20", attacks: 39614 },
  { date: "2019-09-20", attacks: 39614 },
  { date: "2019-10-20", attacks: 39614 },
  { date: "2019-11-20", attacks: 39614 },
  { date: "2019-12-20", attacks: 39614 },
  { date: "2020-01-20", attacks: 54926 },
  { date: "2020-02-20", attacks: 49560 },
  { date: "2020-03-20", attacks: 60286 },
  { date: "2020-04-20", attacks: 48951 },
  { date: "2020-05-20", attacks: 52007 },
  { date: "2020-06-20", attacks: 46036 },
  { date: "2020-07-20", attacks: 171040 },
  { date: "2020-08-20", attacks: 201591 },
  { date: "2020-09-20", attacks: 199133 },
  { date: "2020-10-20", attacks: 225304 },
  { date: "2020-11-20", attacks: 212878 },
  { date: "2020-12-20", attacks: 199120 },
  { date: "2021-01-20", attacks: 245771 },
  { date: "2021-02-20", attacks: 158898 },
  { date: "2021-03-20", attacks: 207208 },
  { date: "2021-04-20", attacks: 204050 },
  { date: "2021-05-20", attacks: 190762 },
  { date: "2021-06-20", attacks: 222127 },
  { date: "2021-07-20", attacks: 260642 },
  { date: "2021-08-20", attacks: 255385 },
  { date: "2021-09-20", attacks: 214345 },
  { date: "2021-10-20", attacks: 267530 },
  { date: "2021-11-20", attacks: 304308 },
  { date: "2021-12-20", attacks: 316747 },
  { date: "2022-01-20", attacks: 341990 },
  { date: "2022-02-20", attacks: 341989 },
  { date: "2022-03-20", attacks: 341989 },
  { date: "2022-04-20", attacks: 365937 },
  { date: "2022-05-20", attacks: 365937 },
  { date: "2022-06-20", attacks: 365937 },
  { date: "2022-07-20", attacks: 423628 },
  { date: "2022-08-20", attacks: 423628 },
  { date: "2022-09-20", attacks: 423627 },
  { date: "2022-10-20", attacks: 450013 },
  { date: "2022-11-20", attacks: 450012 },
  { date: "2022-12-20", attacks: 450012 },
  { date: "2023-01-20", attacks: 415651 },
  { date: "2023-02-20", attacks: 415651 },
  { date: "2023-03-20", attacks: 415651 },
  { date: "2023-04-20", attacks: 415651 },
  { date: "2023-05-20", attacks: 415651 },
  { date: "2023-06-20", attacks: 415651 },
  { date: "2023-07-20", attacks: 415651 },
  { date: "2023-08-20", attacks: 415651 },
  { date: "2023-09-20", attacks: 415651 },
  { date: "2023-10-20", attacks: 415650 },
  { date: "2023-11-20", attacks: 415650 },
  { date: "2023-12-20", attacks: 415650 },
  { date: "2024-01-20", attacks: 321332 },
  { date: "2024-02-20", attacks: 321331 },
  { date: "2024-03-20", attacks: 321331 },
  { date: "2024-04-20", attacks: 292512 },
  { date: "2024-05-20", attacks: 292512 },
  { date: "2024-06-20", attacks: 292512 },
  { date: "2024-07-20", attacks: 310975 },
  { date: "2024-08-20", attacks: 310974 },
  { date: "2024-09-20", attacks: 310974 },
  { date: "2024-10-20", attacks: 329708 },
  { date: "2024-11-20", attacks: 329708 },
  { date: "2024-12-20", attacks: 329707 },
  { date: "2025-01-20", attacks: 334642 },
  { date: "2025-02-20", attacks: 334641 },
  { date: "2025-03-20", attacks: 334641 },
  { date: "2025-04-20", attacks: 335139 },
  { date: "2025-05-20", attacks: 349511 },
  { date: "2025-06-20", attacks: 365381 },
];

const chartConfig = {
  attacks: {
    label: "Total Attacks",
    color: "var(--secondary)",
  },
} satisfies ChartConfig;

export default function PhishingDataChart() {
  const total = React.useMemo(
    () =>
      chartData.reduce(
        (accumulator, current) => accumulator + current.attacks,
        0
      ),
    []
  );

  return (
    <Card className="py-4 sm:py-0">
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  year: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="attacks"
              type="monotone"
              stroke={chartConfig.attacks.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        <CardHeader className="flex flex-col items-stretch !p-0 mt-5 sm:flex-row ">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
            <CardTitle>Phishing Attacks Data</CardTitle>
            <CardDescription>
              Showing approximate amount of phishing attacks from the past 10
              years.
            </CardDescription>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:px-8 sm:py-6 md:border-l">
            <span className="text-muted-foreground text-xs">
              {chartConfig.attacks.label}
            </span>
            <span className="text-lg leading-none font-bold sm:text-3xl">
              {total.toLocaleString()}
            </span>
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
}
