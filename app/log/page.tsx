"use client"

import { useState } from "react"
import { CalendarIcon, Plus } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentMeals } from "@/components/recent-meals"
import { AddFoodDialog } from "@/components/add-food-dialog"

export default function LogPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [isAddFoodOpen, setIsAddFoodOpen] = useState(false)

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl">Meal Log</h1>
          <p className="text-black/70">Track your daily food intake.</p>
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

      <Tabs defaultValue="daily" className="mt-6">
        <TabsList className="bg-white/50">
          <TabsTrigger
            value="daily"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Daily
          </TabsTrigger>
          <TabsTrigger
            value="weekly"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Weekly
          </TabsTrigger>
          <TabsTrigger
            value="monthly"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Monthly
          </TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Daily Food Log</CardTitle>
              <CardDescription className="text-black/70">
                Your food intake for {format(date, "MMMM d, yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentMeals />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Weekly Food Log</CardTitle>
              <CardDescription className="text-black/70">
                Your food intake for the week of {format(date, "MMMM d, yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-black/70">
                Weekly view will show aggregated data for the selected week
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Monthly Food Log</CardTitle>
              <CardDescription className="text-black/70">
                Your food intake for {format(date, "MMMM yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-black/70">
                Monthly view will show aggregated data for the selected month
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddFoodDialog open={isAddFoodOpen} onOpenChange={setIsAddFoodOpen} />
    </div>
  )
}
