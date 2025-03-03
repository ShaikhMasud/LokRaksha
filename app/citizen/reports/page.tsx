"use client"

import { useState } from "react"
import { CitizenLayout } from "@/components/layouts/citizen-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Eye, Filter } from "lucide-react"
import Link from "next/link"

// Sample report data
const reports = [
  {
    id: "001",
    type: "Theft",
    date: "01-Mar-2025",
    location: "Shivaji Nagar, Pune",
    description: "Bag stolen near Shivaji Market around 3 PM",
    status: "Pending",
    severity: "Medium",
    assignedTo: "Inspector Patil",
  },
  {
    id: "002",
    type: "Accident",
    date: "28-Feb-2025",
    location: "FC Road, Pune",
    description: "Two-wheeler accident near FC College gate",
    status: "Resolved",
    severity: "High",
    assignedTo: "Inspector Sharma",
  },
  {
    id: "003",
    type: "Harassment",
    date: "25-Feb-2025",
    location: "Koregaon Park, Pune",
    description: "Verbal harassment by a group of individuals",
    status: "Resolved",
    severity: "Low",
    assignedTo: "Inspector Deshmukh",
  },
  {
    id: "004",
    type: "Vandalism",
    date: "24-Feb-2025",
    location: "MG Road, Pune",
    description: "Shop window broken during late hours",
    status: "Pending",
    severity: "Medium",
    assignedTo: "Inspector Patil",
  },
  {
    id: "005",
    type: "Fraud",
    date: "22-Feb-2025",
    location: "Aundh, Pune",
    description: "Online payment fraud of Rs. 5000",
    status: "Pending",
    severity: "High",
    assignedTo: "Inspector Sharma",
  },
]

export default function MyReports() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter reports based on search term and status filter
  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <CitizenLayout>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">My Reports</h1>
          <Button asChild>
            <Link href="/citizen/report">Report New Incident</Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Reports</CardTitle>
            <CardDescription>Search and filter your submitted reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by ID, type, or location..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <Select defaultValue="all" onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="solved">Solved</SelectItem>
                    <SelectItem value="fake">Fake</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-12 gap-2 p-4 font-medium text-sm bg-muted">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-3">Location</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          <Separator />

          {filteredReports.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">No reports found matching your filters.</div>
          ) : (
            filteredReports.map((report) => (
              <div key={report.id} className="group">
                <div className="grid grid-cols-12 gap-2 p-4 items-center hover:bg-muted/50 transition-colors">
                  <div className="col-span-1 font-medium">{report.id}</div>
                  <div className="col-span-2">{report.date}</div>
                  <div className="col-span-2">{report.type}</div>
                  <div className="col-span-3 truncate" title={report.location}>
                    {report.location}
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        report.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : report.status === "Resolved" || report.status === "Solved"
                            ? "bg-green-100 text-green-800"
                            : report.status === "Fake"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/citizen/reports/${report.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
                <Separator />
              </div>
            ))
          )}
        </div>
      </div>
    </CitizenLayout>
  )
}

