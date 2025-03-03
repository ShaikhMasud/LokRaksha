"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}

