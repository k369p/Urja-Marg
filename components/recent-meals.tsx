"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Pencil, Trash2 } from "lucide-react"

const meals = [
  {
    id: 1,
    time: "Breakfast",
    items: [
      { name: "Chapati", quantity: "2 pieces", calories: 160 },
      { name: "Aloo Bhaji", quantity: "1 bowl", calories: 78 },
      { name: "Masoor Dal", quantity: "1/2 cup", calories: 85 },
    ],
  },
  {
    id: 2,
    time: "Lunch",
    items: [
      { name: "White Rice", quantity: "1 cup", calories: 120 },
      { name: "Rajma", quantity: "1 cup", calories: 337 },
      { name: "Mixed Vegetable Curry", quantity: "1/2 cup", calories: 65 },
    ],
  },
  {
    id: 3,
    time: "Snack",
    items: [
      { name: "Dhokla", quantity: "2 pieces", calories: 100 },
      { name: "Banana", quantity: "1 medium", calories: 89 },
    ],
  },
  {
    id: 4,
    time: "Dinner",
    items: [
      { name: "Tandoori Roti", quantity: "1 piece", calories: 75 },
      { name: "Palak Paneer", quantity: "1/2 cup", calories: 140 },
    ],
  },
]

export function RecentMeals() {
  return (
    <div className="space-y-4">
      {meals.map((meal) => (
        <div key={meal.id} className="rounded-lg border border-purple-200 bg-white/90 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-medium text-black">{meal.time}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-black">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="text-black">
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit meal
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete meal
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-2">
            {meal.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-black">{item.name}</span>
                  <Badge variant="outline" className="border-purple-200 font-normal text-black">
                    {item.quantity}
                  </Badge>
                </div>
                <span className="text-black">{item.calories} kcal</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-end">
            <span className="text-sm font-medium text-black">
              Total: {meal.items.reduce((sum, item) => sum + item.calories, 0)} kcal
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
