"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

// Mock user data for demonstration
const users = [
  { username: "citizen@example.com", password: "password123", role: "citizen" },
  { username: "police@example.com", password: "password123", role: "police" },
  { username: "admin@example.com", password: "password123", role: "admin" },
]

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const defaultRole = searchParams.get("role") || "citizen"

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    role: defaultRole,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if the user exists and credentials are correct
    const user = users.find(
      (u) => u.username === formData.identifier && u.password === formData.password && u.role === formData.role,
    )

    if (user) {
      toast({
        title: "Login Successful",
        description: `Logged in as ${user.role}`,
      })

      // Redirect based on role
      if (user.role === "citizen") {
        router.push("/citizen/dashboard")
      } else if (user.role === "police") {
        router.push("/police/dashboard")
      } else if (user.role === "admin") {
        router.push("/admin/dashboard")
      }
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Login to LokRaksha</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">Select Role</Label>
              <RadioGroup defaultValue={formData.role} onValueChange={handleRoleChange} className="flex space-x-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="citizen" id="citizen" />
                  <Label htmlFor="citizen">Citizen</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="police" id="police" />
                  <Label htmlFor="police">Police</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="admin" id="admin" />
                  <Label htmlFor="admin">Admin</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="identifier">{formData.role === "citizen" ? "Email/Phone" : "Username"}</Label>
              <Input
                id="identifier"
                name="identifier"
                placeholder={formData.role === "citizen" ? "Enter email or phone" : "Enter username"}
                value={formData.identifier}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full">
              Login
            </Button>

            {formData.role === "citizen" && (
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

