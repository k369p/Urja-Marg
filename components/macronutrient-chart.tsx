"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Carbs", value: 156, percentage: 62 },
  { name: "Protein", value: 48, percentage: 19 },
  { name: "Fat", value: 38, percentage: 19 },
]

export function MacronutrientChart() {
  return (
    <ChartContainer
      config={{
        carbs: {
          label: "Carbohydrates",
          color: "hsl(var(--chart-1))",
        },
        protein: {
          label: "Protein",
          color: "hsl(var(--chart-2))",
        },
        fat: {
          label: "Fat",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            label={({ name, percentage }) => `${name}: ${percentage}%`}
            labelLine={false}
          >
            <Cell key="carbs" fill="var(--color-carbs)" />
            <Cell key="protein" fill="var(--color-protein)" />
            <Cell key="fat" fill="var(--color-fat)" />
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
