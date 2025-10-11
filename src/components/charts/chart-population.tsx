"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A mixed bar chart";

const chartData = [
  { population: "general", attacks: 185, fill: "var(--color-general)" },
  {
    population: "trained_workers",
    attacks: 200,
    fill: "var(--color-trained_workers)",
  },
  {
    population: "untrained_workers",
    attacks: 275,
    fill: "var(--color-untrained_workers)",
  },
  { population: "students", attacks: 173, fill: "var(--color-students)" },
  {
    population: "professionals",
    attacks: 90,
    fill: "var(--color-professionals)",
  },
];

const chartConfig = {
  attacks: {
    label: "Attacks",
  },
  general: {
    label: "General",
    color: "var(--chart-1)",
  },
  trained_workers: {
    label: "Trained Workers",
    color: "var(--chart-2)",
  },
  untrained_workers: {
    label: "Untrained Workers",
    color: "var(--chart-3)",
  },
  students: {
    label: "Students",
    color: "var(--chart-4)",
  },
  professionals: {
    label: "Industry Professionals",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

interface ChartTypes {
  className?: string;
}

export function PopulationBarChart({ className }: ChartTypes) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Phishing impact on population.</CardTitle>
        <CardDescription>January - October 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 40,
            }}
          >
            <YAxis
              dataKey="population"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="attacks" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="attacks" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
