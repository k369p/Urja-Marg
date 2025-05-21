"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FoodCategoryList } from "@/components/food-category-list"
import { FoodSearchResults } from "@/components/food-search-results"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl">Food Search</h1>
      <p className="text-black/70">Search for Indian foods to add to your meal log.</p>

      <Card className="mt-6 border-purple-200 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-black">Find Foods</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-2 bg-white/50">
              <TabsTrigger
                value="search"
                className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
              >
                Search
              </TabsTrigger>
              <TabsTrigger
                value="browse"
                className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
              >
                Browse Categories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="mt-4">
              <form
                onSubmit={handleSearch}
                className="mb-4 flex w-full flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
              >
                <div className="relative w-full flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-black/50" />
                  <Input
                    type="search"
                    placeholder="Search for chapati, dal, sabji..."
                    className="border-purple-200 pl-8 text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Search
                </Button>
              </form>

              <div className="rounded-lg border border-purple-200">
                <div className="h-[400px] sm:h-[500px]">
                  <ScrollArea className="h-full">
                    <FoodSearchResults query={searchQuery} />
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="browse" className="mt-4">
              <div className="rounded-lg border border-purple-200">
                <div className="h-[400px] sm:h-[500px]">
                  <ScrollArea className="h-full">
                    <FoodCategoryList />
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
