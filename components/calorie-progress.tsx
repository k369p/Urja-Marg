"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { time: "Breakfast", calories: 350 },
  { time: "Lunch", calories: 520 },
  { time: "Snack", calories: 175 },
  { time: "Dinner", calories: 200 },
]

export function CalorieProgress() {
  return (
    <ChartContainer
      config={{
        calories: {
          label: "Calories",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="time"
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
          <Bar dataKey="calories" fill="var(--color-calories)" radius={[4, 4, 0, 0]} />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
