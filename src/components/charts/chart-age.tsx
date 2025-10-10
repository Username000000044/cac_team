"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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

export const description = "A pie chart with a custom label";

const chartData = [
  { age: "Teen", victims: 230, fill: "var(--color-teen)" },
  { age: "Young Adult", victims: 410, fill: "var(--color-young_adult)" },
  { age: "Adult", victims: 350, fill: "var(--color-adult)" },
  { age: "Senior", victims: 520, fill: "var(--color-senior)" },
];

const chartConfig = {
  phishing_age: {
    label: "Age",
  },
  teen: {
    label: "13-19",
    color: "var(--chart-1)",
  },
  young_adult: {
    label: "20-35",
    color: "var(--chart-2)",
  },
  adult: {
    label: "36-59",
    color: "var(--chart-3)",
  },
  senior: {
    label: "60+",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

interface AgePieChartProps {
  className?: string;
}

export function AgePieChart({ className }: AgePieChartProps) {
  return (
    <Card className={`flex flex-col bg-transparent ${className}`}>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="victims" label nameKey="age" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Seniors are at most risk of phishing{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total amount of attacks per age group.
        </div>
      </CardFooter>
    </Card>
  );
}
