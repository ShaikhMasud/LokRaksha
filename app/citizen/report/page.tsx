"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CitizenLayout } from "@/components/layouts/citizen-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Upload } from "lucide-react"

const incidentTypes = [
  "Theft",
  "Assault",
  "Accident",
  "Harassment",
  "Fraud",
  "Vandalism",
  "Missing Person",
  "Domestic Violence",
  "Other",
]

export default function ReportIncident() {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    incidentType: "",
    description: "",
    date: "",
    time: "",
    location: "",
    severity: "medium",
    photo: null as File | null,
  })

  const [useCurrentLocation, setUseCurrentLocation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photo: e.target.files![0] }))
    }
  }

  const getCurrentLocation = () => {
    setUseCurrentLocation(true)
    // In a real app, we would use the Geolocation API
    setFormData((prev) => ({ ...prev, location: "Current Location: Pune, Maharashtra" }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.incidentType || !formData.description || !formData.date || !formData.time || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // In a real app, we would submit the form data to an API
    toast({
      title: "Report Submitted",
      description: "Your report has been submitted successfully. Report ID: 004",
    })

    router.push("/citizen/dashboard")
  }

  return (
    <CitizenLayout>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Report an Incident</h1>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Incident Details</CardTitle>
            <CardDescription>Please provide as much detail as possible about the incident</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="incidentType">Incident Type</Label>
                <Select onValueChange={(value) => handleSelectChange("incidentType", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    {incidentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe what happened in detail"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex gap-2">
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter the location of the incident"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" onClick={getCurrentLocation} className="flex-shrink-0">
                    <MapPin className="h-4 w-4 mr-2" />
                    Use Current
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Severity</Label>
                <RadioGroup
                  defaultValue="medium"
                  onValueChange={(value) => handleSelectChange("severity", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="photo">Photo (Optional)</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("photo")?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {formData.photo ? "Change Photo" : "Upload Photo"}
                  </Button>
                  <Input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {formData.photo && <span className="text-sm text-muted-foreground">{formData.photo.name}</span>}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit">Submit Report</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </CitizenLayout>
  )
}

