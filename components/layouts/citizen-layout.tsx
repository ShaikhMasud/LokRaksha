"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"

interface CitizenLayoutProps {
  children: React.ReactNode
}

export function CitizenLayout({ children }: CitizenLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="citizen" />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}

