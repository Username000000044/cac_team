"use client"

import { useState } from "react";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


const chartData = [
  // July 2025
  { date: "2025-07-07", clicks: 180, opens: 210, sends: 500 },
  { date: "2025-07-09", clicks: 190, opens: 220, sends: 510 },
  { date: "2025-07-11", clicks: 175, opens: 205, sends: 495 },
  { date: "2025-07-15", clicks: 200, opens: 230, sends: 520 },
  { date: "2025-07-17", clicks: 215, opens: 245, sends: 530 },
  { date: "2025-07-19", clicks: 205, opens: 240, sends: 525 },
  { date: "2025-07-23", clicks: 210, opens: 250, sends: 540 },
  { date: "2025-07-25", clicks: 220, opens: 260, sends: 550 },
  { date: "2025-07-27", clicks: 230, opens: 270, sends: 560 },

  // August 2025
  { date: "2025-08-01", clicks: 210, opens: 255, sends: 540 },
  { date: "2025-08-04", clicks: 215, opens: 265, sends: 550 },
  { date: "2025-08-06", clicks: 225, opens: 275, sends: 560 },
  { date: "2025-08-10", clicks: 230, opens: 280, sends: 570 },
  { date: "2025-08-13", clicks: 240, opens: 290, sends: 580 },
  { date: "2025-08-15", clicks: 235, opens: 285, sends: 575 },
  { date: "2025-08-19", clicks: 245, opens: 300, sends: 590 },
  { date: "2025-08-21", clicks: 250, opens: 310, sends: 600 },
  { date: "2025-08-24", clicks: 255, opens: 315, sends: 605 },

  // September 2025
  { date: "2025-09-02", clicks: 260, opens: 320, sends: 610 },
  { date: "2025-09-04", clicks: 265, opens: 325, sends: 615 },
  { date: "2025-09-06", clicks: 270, opens: 330, sends: 620 },
  { date: "2025-09-10", clicks: 275, opens: 340, sends: 625 },
  { date: "2025-09-12", clicks: 280, opens: 345, sends: 630 },
  { date: "2025-09-15", clicks: 290, opens: 355, sends: 640 },
  { date: "2025-09-18", clicks: 285, opens: 350, sends: 635 },
  { date: "2025-09-21", clicks: 295, opens: 360, sends: 645 },
  { date: "2025-09-25", clicks: 300, opens: 370, sends: 650 },

  // October 2025
  { date: "2025-10-01", clicks: 310, opens: 380, sends: 660 },
  { date: "2025-10-03", clicks: 315, opens: 390, sends: 670 },
  { date: "2025-10-06", clicks: 320, opens: 395, sends: 675 },
  { date: "2025-10-09", clicks: 325, opens: 400, sends: 680 },
  { date: "2025-10-12", clicks: 330, opens: 410, sends: 690 },
  { date: "2025-10-15", clicks: 335, opens: 415, sends: 700 },
  { date: "2025-10-18", clicks: 340, opens: 425, sends: 710 },
  { date: "2025-10-21", clicks: 345, opens: 430, sends: 720 },
  { date: "2025-10-24", clicks: 350, opens: 440, sends: 730 },
  { date: "2025-10-27", clicks: 355, opens: 450, sends: 740 },
  { date: "2025-10-30", clicks: 360, opens: 460, sends: 750 },
];
const chartConfig = {
    attacks: {
        label: "Phishing Attacks"
    },
    clicks: {
        label: "Clicks",
        color: "var(--chart-1)"
    },
    opens: {
        label: "Opens",
        color: "var(--chart-2)"
    },
    sends: {
        label: "Sends",
        color: "var(--chart-3)"
    }
}

interface ActivityChartProps {
  className?: string;
}

export default function ActivityChart({ className }: ActivityChartProps) {
    const [timeRange, setTimeRange] = useState("90d");

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date);
        let daysToSubtract = 90;

        if(timeRange === "30d") {
            daysToSubtract = 30;
        } else if(timeRange === "7d") {
            daysToSubtract = 7;
        }
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
    })

    return (
        <Card className={`pt-0 bg-background ${className}`}>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Phishing Attacks</CardTitle>
                    <CardDescription>
                        Showing total phishing attacks in a cetain time frame.
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                    className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                    aria-label="Select a value"
                >
                    <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                    <SelectItem value="90d" className="rounded-lg">
                    Last 3 months
                    </SelectItem>
                    <SelectItem value="30d" className="rounded-lg">
                    Last 30 days
                    </SelectItem>
                    <SelectItem value="7d" className="rounded-lg">
                    Last 7 days
                    </SelectItem>
                </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillClicks" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-clicks)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-clicks)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillOpens" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-opens)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-opens)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSends" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sends)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sends)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="clicks"
              type="natural"
              fill="url(#fillClicks)"
              stroke="var(--color-clicks)"
              stackId="a"
            />
            <Area
              dataKey="opens"
              type="natural"
              fill="url(#fillOpens)"
              stroke="var(--color-opens)"
              stackId="a"
            />
            <Area
              dataKey="sends"
              type="natural"
              fill="url(#fillSends)"
              stroke="var(--color-sends)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
        </Card>
    )
}
