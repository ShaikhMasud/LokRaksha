"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  FileText,
  Home,
  LogOut,
  Shield,
  User,
  Building2,
  MapPin,
  PlusCircle,
  AlertTriangle,
  BarChart,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface SidebarProps {
  role: "citizen" | "police" | "admin"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  const citizenLinks = [
    {
      name: "Dashboard",
      href: "/citizen/dashboard",
      icon: Home,
    },
    {
      name: "Report Incident",
      href: "/citizen/report",
      icon: AlertTriangle,
    },
    {
      name: "My Reports",
      href: "/citizen/reports",
      icon: FileText,
    },
    {
      name: "Profile",
      href: "/citizen/profile",
      icon: User,
    },
  ]

  const policeLinks = [
    {
      name: "Dashboard",
      href: "/police/dashboard",
      icon: Home,
    },
    {
      name: "User Reports",
      href: "/police/reports",
      icon: FileText,
    },
    {
      name: "Crime Data",
      href: "/police/crime-data",
      icon: BarChart3,
    },
    {
      name: "Profile",
      href: "/police/profile",
      icon: User,
    },
  ]

  const adminLinks = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: Home,
    },
    {
      name: "Police Management",
      href: "/admin/police",
      icon: Shield,
    },
    {
      name: "Station Management",
      href: "/admin/stations",
      icon: Building2,
    },
    {
      name: "Crime Details",
      href: "/admin/crime-details",
      icon: BarChart,
    },
    {
      name: "Add Police",
      href: "/admin/add-police",
      icon: PlusCircle,
    },
    {
      name: "Add Station",
      href: "/admin/add-station",
      icon: MapPin,
    },
  ]

  const links = role === "citizen" ? citizenLinks : role === "police" ? policeLinks : adminLinks

  return (
    <div className="group flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href={`/${role}/dashboard`} className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6 text-primary" />
          <span>MCRS {role === "admin" ? "Admin" : role === "police" ? "Police" : ""}</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2 py-4">
          {links.map((link) => (
            <Button
              key={link.href}
              variant={pathname === link.href ? "secondary" : "ghost"}
              className={cn("w-full justify-start", pathname === link.href && "bg-secondary")}
              asChild
            >
              <Link href={link.href}>
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="space-y-2 py-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}

