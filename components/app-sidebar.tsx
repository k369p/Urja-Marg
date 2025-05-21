"use client"

import { Home, PieChart, Search, Settings, UtensilsCrossed, User } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Food Search",
    icon: Search,
    href: "/search",
  },
  {
    title: "Meal Log",
    icon: UtensilsCrossed,
    href: "/log",
  },
  {
    title: "Nutrition",
    icon: PieChart,
    href: "/nutrition",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-purple-200 bg-white/80 backdrop-blur-sm">
      <SidebarHeader className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/logo.png"
              alt="ऊर्जा-मार्ग Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-black">ऊर्जा-मार्ग</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href} className="text-black">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="text-xs text-black/70">ऊर्जा-मार्ग - Your Indian Food Calorie Tracker</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
