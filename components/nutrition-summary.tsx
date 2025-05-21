"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", calories: 1800, goal: 2000 },
  { day: "Tue", calories: 1650, goal: 2000 },
  { day: "Wed", calories: 2100, goal: 2000 },
  { day: "Thu", calories: 1950, goal: 2000 },
  { day: "Fri", calories: 1700, goal: 2000 },
  { day: "Sat", calories: 2200, goal: 2000 },
  { day: "Sun", calories: 1245, goal: 2000 },
]

export function NutritionSummary() {
  return (
    <ChartContainer
      config={{
        calories: {
          label: "Calories",
          color: "hsl(var(--chart-1))",
        },
        goal: {
          label: "Goal",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            stroke="hsl(var(--muted-foreground))"
          />
          <Line
            type="monotone"
            dataKey="calories"
            stroke="var(--color-calories)"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="goal"
            stroke="var(--color-goal)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
