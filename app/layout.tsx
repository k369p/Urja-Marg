import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ऊर्जा-मार्ग | Indian Food Calorie Tracker",
  description: "Track calories and nutrition for traditional Indian meals",
  icons: {
    icon: "/images/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-gradient-to-br from-purple-100 via-fuchsia-50 to-rose-100">
            <SidebarProvider>
              <div className="flex min-h-screen">
                <AppSidebar />
                <main className="flex-1 relative">
                  <div className="fixed top-4 left-4 z-50 md:hidden">
                    <div className="flex items-center gap-2">
                      <SidebarTrigger />
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src="/images/logo.png"
                          alt="ऊर्जा-मार्ग Logo"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-16 md:pt-0">{children}</div>
                </main>
              </div>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
