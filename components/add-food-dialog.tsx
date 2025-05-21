"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FoodCategoryList } from "@/components/food-category-list"
import { FoodSearchResults } from "@/components/food-search-results"

interface AddFoodDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddFoodDialog({ open, onOpenChange }: AddFoodDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("search")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/90 backdrop-blur-sm sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-black">Add Food to Log</DialogTitle>
          <DialogDescription className="text-black/70">
            Search for Indian foods or browse by category.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="search" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/50">
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
            <div className="mt-2">
              <Label className="text-black">Search Results</Label>
              <div className="mt-2 h-[250px] overflow-hidden rounded-md border border-purple-200 sm:h-[300px]">
                <ScrollArea className="h-full">
                  <FoodSearchResults query={searchQuery} />
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="browse" className="mt-4">
            <div className="h-[300px] overflow-hidden rounded-md border border-purple-200 sm:h-[350px]">
              <ScrollArea className="h-full">
                <FoodCategoryList />
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Add Selected Foods</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
