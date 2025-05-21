"use client"

import { useState } from "react"
import { ChevronRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    id: "breads-grains",
    name: "Breads & Grains",
    items: [
      { name: "Chapati (Whole wheat)", servingSize: "1 piece", calories: 75 },
      { name: "Naan (White flour)", servingSize: "1 piece", calories: 335 },
      { name: "Tandoori Roti", servingSize: "1 piece", calories: 75 },
      { name: "Paratha", servingSize: "1 piece", calories: 175 },
      { name: "Bhatura", servingSize: "1 piece", calories: 325 },
      { name: "Puri", servingSize: "1 piece", calories: 90 },
      { name: "Kulcha", servingSize: "1 piece", calories: 225 },
      { name: "Missi Roti", servingSize: "1 piece", calories: 175 },
      { name: "Roomali Roti", servingSize: "1 piece", calories: 125 },
      { name: "White Rice (Boiled)", servingSize: "1 cup", calories: 120 },
    ],
  },
  {
    id: "vegetables",
    name: "Vegetable Dishes (Sabji)",
    items: [
      { name: "Bhindi (Okra) Sabji", servingSize: "1 bowl", calories: 57 },
      { name: "Aloo (Potato) Bhaji", servingSize: "1 bowl", calories: 78 },
      { name: "Baingan Bharta", servingSize: "1 serving", calories: 175 },
      { name: "Palak Paneer", servingSize: "1 cup", calories: 280 },
      { name: "Mixed Vegetable Curry", servingSize: "1 cup", calories: 130 },
      { name: "Aloo Gobi", servingSize: "1 bowl", calories: 150 },
      { name: "Matar Paneer", servingSize: "1 cup", calories: 290 },
      { name: "Karela (Bitter Gourd) Sabji", servingSize: "1 bowl", calories: 60 },
    ],
  },
  {
    id: "lentils",
    name: "Lentils & Legumes",
    items: [
      { name: "Dal Makhani", servingSize: "1 serving", calories: 275 },
      { name: "Rajma (Kidney Beans)", servingSize: "1 cup", calories: 337 },
      { name: "Chana Masala", servingSize: "1 serving", calories: 175 },
      { name: "Sprouts (Mixed)", servingSize: "100 gm", calories: 44 },
      { name: "Tadka Dal (Yellow Lentils)", servingSize: "1 cup", calories: 180 },
      { name: "Kala Chana Curry", servingSize: "1 bowl", calories: 210 },
    ],
  },
  {
    id: "rice-combos",
    name: "Rice & Combinations",
    items: [
      { name: "Vegetable Biryani", servingSize: "1 serving", calories: 350 },
      { name: "Chicken Biryani", servingSize: "1 serving", calories: 550 },
      { name: "Rajma Chawal", servingSize: "1 serving", calories: 350 },
      { name: "Chole Chawal", servingSize: "1 serving", calories: 400 },
      { name: "Lemon Rice", servingSize: "1 bowl", calories: 190 },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Sweets",
    items: [
      { name: "Samosa", servingSize: "1 piece", calories: 125 },
      { name: "Pakora (Onion)", servingSize: "1 piece", calories: 175 },
      { name: "Dhokla", servingSize: "1 piece", calories: 125 },
      { name: "Gulab Jamun", servingSize: "1 piece", calories: 175 },
      { name: "Rasgulla", servingSize: "1 piece", calories: 137 },
      { name: "Jalebi", servingSize: "1 piece", calories: 150 },
    ],
  },
  {
    id: "fruits",
    name: "Fruits",
    items: [
      { name: "Apple", servingSize: "1 medium", calories: 52 },
      { name: "Banana", servingSize: "1 medium", calories: 89 },
      { name: "Mango", servingSize: "1 medium", calories: 60 },
      { name: "Grapes", servingSize: "1 cup", calories: 69 },
      { name: "Orange", servingSize: "1 medium", calories: 47 },
    ],
  },
]

export function FoodCategoryList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [mobileView, setMobileView] = useState(true)

  // On small screens, we'll show either categories or items, not both
  const selectedCategoryData = categories.find((c) => c.id === selectedCategory)

  return (
    <div className="flex h-full flex-col sm:flex-row">
      {/* On mobile, show either categories or selected category items */}
      {(!selectedCategory || !mobileView) && (
        <div className="h-full w-full overflow-auto p-4 sm:w-1/3 sm:border-r sm:border-purple-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-black">Food Categories</h3>
            {selectedCategory && mobileView && (
              <Button variant="ghost" size="sm" onClick={() => setSelectedCategory(null)}>
                Back to Categories
              </Button>
            )}
          </div>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className="w-full justify-between text-black hover:bg-purple-100"
                onClick={() => {
                  setSelectedCategory(category.id)
                  if (window.innerWidth < 640) {
                    setMobileView(true)
                  }
                }}
              >
                {category.name}
                <ChevronRight className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* On mobile, only show this when a category is selected */}
      {selectedCategory && (mobileView || window.innerWidth >= 640) && (
        <div className="h-full w-full overflow-auto p-4 sm:w-2/3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-black">{selectedCategoryData?.name}</h3>
            {window.innerWidth < 640 && (
              <Button variant="outline" size="sm" className="text-black" onClick={() => setSelectedCategory(null)}>
                Back
              </Button>
            )}
          </div>

          {selectedCategoryData ? (
            <div className="space-y-2">
              {selectedCategoryData.items.map((item, index) => (
                <div key={index} className="group flex items-center justify-between rounded-md p-2 hover:bg-purple-100">
                  <div>
                    <div className="font-medium text-black">{item.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-black/70">{item.servingSize}</span>
                      <Badge variant="outline" className="border-purple-200 text-black">
                        {item.calories} kcal
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add {item.name}</span>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-black/50">Select a category to view foods</div>
          )}
        </div>
      )}
    </div>
  )
}
