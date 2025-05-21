"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Settings</h1>
      <p className="text-muted-foreground">Manage your app settings and preferences.</p>

      <Tabs defaultValue="general" className="mt-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your general app settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
                  <span>Dark Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Enable dark mode for the application
                  </span>
                </Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="auto-save" className="flex flex-col space-y-1">
                  <span>Auto-save Entries</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Automatically save food entries as you add them
                  </span>
                </Label>
                <Switch id="auto-save" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="offline-mode" className="flex flex-col space-y-1">
                  <span>Offline Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Enable offline functionality for the app
                  </span>
                </Label>
                <Switch id="offline-mode" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="meal-reminders" className="flex flex-col space-y-1">
                  <span>Meal Reminders</span>
                  <span className="font-normal text-sm text-muted-foreground">Receive reminders to log your meals</span>
                </Label>
                <Switch id="meal-reminders" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="goal-updates" className="flex flex-col space-y-1">
                  <span>Goal Updates</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive notifications about your nutrition goals
                  </span>
                </Label>
                <Switch id="goal-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="weekly-summary" className="flex flex-col space-y-1">
                  <span>Weekly Summary</span>
                  <span className="font-normal text-sm text-muted-foreground">Receive weekly nutrition summaries</span>
                </Label>
                <Switch id="weekly-summary" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="tips-suggestions" className="flex flex-col space-y-1">
                  <span>Tips & Suggestions</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive healthy eating tips and food suggestions
                  </span>
                </Label>
                <Switch id="tips-suggestions" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="privacy" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy and data settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="data-collection" className="flex flex-col space-y-1">
                  <span>Data Collection</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Allow anonymous data collection to improve the app
                  </span>
                </Label>
                <Switch id="data-collection" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="personalized-suggestions" className="flex flex-col space-y-1">
                  <span>Personalized Suggestions</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive personalized food and nutrition suggestions
                  </span>
                </Label>
                <Switch id="personalized-suggestions" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="third-party-sharing" className="flex flex-col space-y-1">
                  <span>Third-party Data Sharing</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Share data with third-party nutrition services
                  </span>
                </Label>
                <Switch id="third-party-sharing" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Privacy Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
