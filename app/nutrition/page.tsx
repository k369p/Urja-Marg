"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalorieProgress } from "@/components/calorie-progress"
import { MacronutrientChart } from "@/components/macronutrient-chart"
import { NutritionSummary } from "@/components/nutrition-summary"

export default function NutritionPage() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl">Nutrition Analysis</h1>
          <p className="text-black/70">Analyze your nutrition and calorie intake.</p>
        </div>
        <div className="flex items-center gap-2">
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
        </div>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="bg-white/50">
          <TabsTrigger
            value="overview"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="macros"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Macronutrients
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Trends
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-black">Calorie Progress</CardTitle>
                <CardDescription className="text-black/70">Your daily calorie consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <CalorieProgress />
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-black">Macronutrient Distribution</CardTitle>
                <CardDescription className="text-black/70">Carbs, protein, and fat breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <MacronutrientChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="macros" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Macronutrient Analysis</CardTitle>
              <CardDescription className="text-black/70">
                Detailed breakdown of your macronutrient intake
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="bg-white/90">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-black">Carbohydrates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-black">156g</div>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Fiber</span>
                        <span className="text-black">18g</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Sugar</span>
                        <span className="text-black">42g</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Other Carbs</span>
                        <span className="text-black">96g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-black">Protein</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-black">48g</div>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Plant Protein</span>
                        <span className="text-black">32g</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Animal Protein</span>
                        <span className="text-black">16g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-black">Fat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-black">38g</div>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Saturated</span>
                        <span className="text-black">12g</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Unsaturated</span>
                        <span className="text-black">22g</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">Trans</span>
                        <span className="text-black">4g</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Nutrition Trends</CardTitle>
              <CardDescription className="text-black/70">Track your nutrition trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <NutritionSummary />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
