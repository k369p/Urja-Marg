"use client"

import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would normally come from an API or database
const recentFoods = [
  { name: "Chapati", servingSize: "1 piece", calories: 75 },
  { name: "Dal Makhani", servingSize: "1 serving", calories: 275 },
  { name: "Aloo Gobi", servingSize: "1 bowl", calories: 150 },
  { name: "Vegetable Biryani", servingSize: "1 serving", calories: 350 },
  { name: "Gulab Jamun", servingSize: "1 piece", calories: 175 },
  { name: "Palak Paneer", servingSize: "1 cup", calories: 280 },
  { name: "Tandoori Roti", servingSize: "1 piece", calories: 75 },
  { name: "Rajma", servingSize: "1 cup", calories: 337 },
  { name: "Samosa", servingSize: "1 piece", calories: 125 },
  { name: "Dhokla", servingSize: "2 pieces", calories: 250 },
]

interface FoodSearchResultsProps {
  query?: string
}

export function FoodSearchResults({ query }: FoodSearchResultsProps) {
  // This would normally filter based on the query
  const foods = query
    ? recentFoods.filter((food) => food.name.toLowerCase().includes(query.toLowerCase()))
    : recentFoods

  if (foods.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-4 text-center text-black/50">
        No foods found matching &quot;{query}&quot;
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="space-y-2">
        {foods.map((food, index) => (
          <div key={index} className="group flex items-center justify-between rounded-md p-3 hover:bg-purple-100">
            <div>
              <div className="font-medium text-black">{food.name}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-black/70">{food.servingSize}</span>
                <Badge variant="outline" className="border-purple-200 text-black">
                  {food.calories} kcal
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-black opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100"
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add {food.name}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
