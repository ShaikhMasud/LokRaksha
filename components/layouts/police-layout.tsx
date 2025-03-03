"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"

interface PoliceLayoutProps {
  children: React.ReactNode
}

export function PoliceLayout({ children }: PoliceLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="police" />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}

