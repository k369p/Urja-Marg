"use client"

import { useState } from "react"
import { CalendarIcon, Plus } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { NutritionSummary } from "@/components/nutrition-summary"
import { RecentMeals } from "@/components/recent-meals"
import { CalorieProgress } from "@/components/calorie-progress"
import { MacronutrientChart } from "@/components/macronutrient-chart"
import { AddFoodDialog } from "@/components/add-food-dialog"

export function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [isAddFoodOpen, setIsAddFoodOpen] = useState(false)

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl">Dashboard</h1>
          <p className="text-black/70">Track your daily nutrition and calorie intake.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left text-black md:w-auto">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(date, "PPP")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={(date) => date && setDate(date)} initialFocus />
            </PopoverContent>
          </Popover>
          <Button onClick={() => setIsAddFoodOpen(true)} className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add Food
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Total Calories</CardTitle>
            <CardDescription className="text-black/70">Daily goal: 2000 kcal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">1,245 kcal</div>
            <p className="text-xs text-black/70">755 kcal remaining</p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Carbohydrates</CardTitle>
            <CardDescription className="text-black/70">Daily goal: 250g</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">156g</div>
            <p className="text-xs text-black/70">62% of daily goal</p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Protein</CardTitle>
            <CardDescription className="text-black/70">Daily goal: 75g</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">48g</div>
            <p className="text-xs text-black/70">64% of daily goal</p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Fat</CardTitle>
            <CardDescription className="text-black/70">Daily goal: 65g</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">38g</div>
            <p className="text-xs text-black/70">58% of daily goal</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="col-span-1 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-black">Calorie Progress</CardTitle>
            <CardDescription className="text-black/70">Your daily calorie consumption</CardDescription>
          </CardHeader>
          <CardContent>
            <CalorieProgress />
          </CardContent>
        </Card>
        <Card className="col-span-1 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-black">Macronutrient Distribution</CardTitle>
            <CardDescription className="text-black/70">Carbs, protein, and fat breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <MacronutrientChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="col-span-1 bg-white/80 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-black">Recent Meals</CardTitle>
            <CardDescription className="text-black/70">
              Your food intake for {format(date, "MMMM d, yyyy")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentMeals />
          </CardContent>
        </Card>
        <Card className="col-span-1 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-black">Nutrition Summary</CardTitle>
            <CardDescription className="text-black/70">Weekly nutrition overview</CardDescription>
          </CardHeader>
          <CardContent>
            <NutritionSummary />
          </CardContent>
        </Card>
      </div>

      <AddFoodDialog open={isAddFoodOpen} onOpenChange={setIsAddFoodOpen} />
    </div>
  )
}
