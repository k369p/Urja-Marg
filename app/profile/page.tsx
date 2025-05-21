"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  age: z.coerce.number().min(1).max(120),
  gender: z.enum(["male", "female", "other"]),
  height: z.coerce.number().min(50).max(250),
  weight: z.coerce.number().min(20).max(300),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very-active"]),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  name: "Rahul Sharma",
  age: 32,
  gender: "male",
  height: 175,
  weight: 70,
  activityLevel: "moderate",
}

// Create separate schemas for other forms
const nutritionGoalsSchema = z.object({
  calorieGoal: z.coerce.number().min(500).max(10000),
  weightGoal: z.enum(["lose", "maintain", "gain"]),
  carbPercentage: z.coerce.number().min(0).max(100),
  proteinPercentage: z.coerce.number().min(0).max(100),
  fatPercentage: z.coerce.number().min(0).max(100),
})

const preferencesSchema = z.object({
  language: z.enum(["en-in", "hi", "en-us"]),
  measurementSystem: z.enum(["metric", "imperial"]),
  dietaryPreference: z.enum(["all", "vegetarian", "vegan", "jain"]),
})

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  // Create separate form instances for each tab
  const personalForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  })

  const nutritionForm = useForm({
    resolver: zodResolver(nutritionGoalsSchema),
    defaultValues: {
      calorieGoal: 2000,
      weightGoal: "maintain",
      carbPercentage: 50,
      proteinPercentage: 30,
      fatPercentage: 20,
    },
  })

  const preferencesForm = useForm({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      language: "en-in",
      measurementSystem: "metric",
      dietaryPreference: "all",
    },
  })

  function onPersonalSubmit(data: ProfileFormValues) {
    console.log("Personal form data:", data)
  }

  function onNutritionSubmit(data: any) {
    console.log("Nutrition form data:", data)
  }

  function onPreferencesSubmit(data: any) {
    console.log("Preferences form data:", data)
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl">Profile</h1>
      <p className="text-black/70">Manage your personal information and preferences.</p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="bg-white/50">
          <TabsTrigger
            value="personal"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Personal Info
          </TabsTrigger>
          <TabsTrigger
            value="goals"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Nutrition Goals
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="text-black data-[state=active]:bg-purple-100 data-[state=active]:text-black"
          >
            Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Personal Information</CardTitle>
              <CardDescription className="text-black/70">
                Update your personal details and physical attributes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...personalForm}>
                <form onSubmit={personalForm.handleSubmit(onPersonalSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={personalForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="text-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Age</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} className="text-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-black">Gender</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="male" />
                                </FormControl>
                                <FormLabel className="font-normal text-black">Male</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="female" />
                                </FormControl>
                                <FormLabel className="font-normal text-black">Female</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="other" />
                                </FormControl>
                                <FormLabel className="font-normal text-black">Other</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Height (cm)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} className="text-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} className="text-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="activityLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Activity Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="text-black">
                                <SelectValue placeholder="Select activity level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                              <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                              <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                              <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                              <SelectItem value="very-active">Very Active (intense exercise daily)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription className="text-black/70">
                            This helps us calculate your daily calorie needs.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Nutrition Goals</CardTitle>
              <CardDescription className="text-black/70">Set your daily nutrition and calorie targets.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={nutritionForm.handleSubmit(onNutritionSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <FormLabel className="text-black">Daily Calorie Goal</FormLabel>
                    <Input type="number" {...nutritionForm.register("calorieGoal")} className="text-black" />
                    <p className="text-xs text-black/70">Recommended: 2000 kcal (based on your profile)</p>
                  </div>
                  <div className="space-y-2">
                    <FormLabel className="text-black">Weight Goal</FormLabel>
                    <Select
                      defaultValue="maintain"
                      onValueChange={(value) =>
                        nutritionForm.setValue("weightGoal", value as "lose" | "maintain" | "gain")
                      }
                    >
                      <SelectTrigger className="text-black">
                        <SelectValue placeholder="Select weight goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lose">Lose Weight</SelectItem>
                        <SelectItem value="maintain">Maintain Weight</SelectItem>
                        <SelectItem value="gain">Gain Weight</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <FormLabel className="text-black">Macronutrient Distribution</FormLabel>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-black">Carbohydrates (%)</FormLabel>
                      <Input type="number" {...nutritionForm.register("carbPercentage")} className="text-black" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-black">Protein (%)</FormLabel>
                      <Input type="number" {...nutritionForm.register("proteinPercentage")} className="text-black" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-black">Fat (%)</FormLabel>
                      <Input type="number" {...nutritionForm.register("fatPercentage")} className="text-black" />
                    </div>
                  </div>
                  <p className="text-xs text-black/70">Note: Percentages should add up to 100%</p>
                </div>
                <Button type="submit" className="mt-4">
                  Save Nutrition Goals
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="mt-4">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">App Preferences</CardTitle>
              <CardDescription className="text-black/70">Customize your app experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={preferencesForm.handleSubmit(onPreferencesSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <FormLabel className="text-black">Language</FormLabel>
                  <Select
                    defaultValue="en-in"
                    onValueChange={(value) => preferencesForm.setValue("language", value as "en-in" | "hi" | "en-us")}
                  >
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en-in">English (India)</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="en-us">English (US)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <FormLabel className="text-black">Measurement System</FormLabel>
                  <Select
                    defaultValue="metric"
                    onValueChange={(value) =>
                      preferencesForm.setValue("measurementSystem", value as "metric" | "imperial")
                    }
                  >
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Select measurement system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                      <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <FormLabel className="text-black">Dietary Preferences</FormLabel>
                  <Select
                    defaultValue="all"
                    onValueChange={(value) =>
                      preferencesForm.setValue("dietaryPreference", value as "all" | "vegetarian" | "vegan" | "jain")
                    }
                  >
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Select dietary preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Foods</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="jain">Jain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="mt-4">
                  Save Preferences
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
