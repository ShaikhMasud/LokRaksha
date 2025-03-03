"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/layouts/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

// Maharashtra districts
const districts = [
  "Mumbai City",
  "Mumbai Suburban",
  "Thane",
  "Palghar",
  "Raigad",
  "Pune",
  "Satara",
  "Solapur",
  "Kolhapur",
  "Sangli",
  "Nashik",
  "Ahmednagar",
  "Dhule",
  "Jalgaon",
  "Nandurbar",
  "Aurangabad",
  "Jalna",
  "Beed",
  "Osmanabad",
  "Nanded",
  "Latur",
  "Parbhani",
  "Hingoli",
  "Nagpur",
  "Wardha",
  "Bhandara",
  "Gondia",
  "Chandrapur",
  "Gadchiroli",
  "Amravati",
  "Akola",
  "Washim",
  "Buldhana",
  "Yavatmal",
]

// Police ranks
const ranks = [
  "Constable",
  "Head Constable",
  "Assistant Sub-Inspector",
  "Sub-Inspector",
  "Inspector",
  "Deputy Superintendent of Police",
  "Additional Superintendent of Police",
  "Superintendent of Police",
  "Deputy Inspector General",
  "Inspector General",
  "Additional Director General",
  "Director General",
]

// Sample police stations
const stations = {
  "Mumbai City": ["Mumbai Central", "Colaba", "Bandra", "Dadar", "Worli"],
  Pune: ["Pune Central", "Shivaji Nagar", "Kothrud", "Hadapsar", "Yerawada"],
  Nagpur: ["Nagpur Sadar", "Sitabuldi", "Lakadganj", "Tehsil", "Sonegaon"],
  Thane: ["Thane Central", "Naupada", "Wagle Estate", "Kopri", "Kalwa"],
  Nashik: ["Nashik Central", "Panchavati", "Satpur", "Gangapur", "Ambad"],
}

export default function AddPolice() {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    rank: "",
    district: "",
    station: "",
    contact: "",
    email: "",
    username: "",
    password: "",
  })

  const [availableStations, setAvailableStations] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Update available stations when district changes
    if (name === "district") {
      const districtStations = stations[value as keyof typeof stations] || []
      setAvailableStations(districtStations)
      setFormData((prev) => ({ ...prev, station: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.rank || !formData.district || !formData.station || !formData.contact) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // In a real app, we would submit the form data to an API
    toast({
      title: "Police Officer Added",
      description: `${formData.rank} ${formData.name} has been added successfully.`,
    })

    router.push("/admin/police")
  }

  return (
    <AdminLayout>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Add Police Officer</h1>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Officer Details</CardTitle>
            <CardDescription>Add a new police officer to the system</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter officer's full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rank">Rank</Label>
                  <Select onValueChange={(value) => handleSelectChange("rank", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rank" />
                    </SelectTrigger>
                    <SelectContent>
                      {ranks.map((rank) => (
                        <SelectItem key={rank} value={rank}>
                          {rank}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Select onValueChange={(value) => handleSelectChange("district", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="station">Police Station</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("station", value)}
                  disabled={!formData.district}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder={formData.district ? "Select station" : "Select district first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {availableStations.map((station) => (
                      <SelectItem key={station} value={station}>
                        {station}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder="Enter contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Create username for login"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit">Add Officer</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </AdminLayout>
  )
}

