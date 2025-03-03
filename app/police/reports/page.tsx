"use client"

import { useState } from "react"
import { PoliceLayout } from "@/components/layouts/police-layout"
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
    reportedBy: "Priya Sharma",
    contact: "9876543210",
  },
  {
    id: "002",
    type: "Accident",
    date: "28-Feb-2025",
    location: "FC Road, Pune",
    description: "Two-wheeler accident near FC College gate",
    status: "Resolved",
    severity: "High",
    reportedBy: "Rahul Patel",
    contact: "9876543211",
  },
  {
    id: "003",
    type: "Harassment",
    date: "25-Feb-2025",
    location: "Koregaon Park, Pune",
    description: "Verbal harassment by a group of individuals",
    status: "Resolved",
    severity: "Low",
    reportedBy: "Anita Desai",
    contact: "9876543212",
  },
  {
    id: "004",
    type: "Vandalism",
    date: "24-Feb-2025",
    location: "MG Road, Pune",
    description: "Shop window broken during late hours",
    status: "Pending",
    severity: "Medium",
    reportedBy: "Vikram Mehta",
    contact: "9876543213",
  },
  {
    id: "005",
    type: "Fraud",
    date: "22-Feb-2025",
    location: "Aundh, Pune",
    description: "Online payment fraud of Rs. 5000",
    status: "Pending",
    severity: "High",
    reportedBy: "Sanjay Kumar",
    contact: "9876543214",
  },
  {
    id: "006",
    type: "Theft",
    date: "20-Feb-2025",
    location: "Kothrud, Pune",
    description: "Mobile phone stolen from shop counter",
    status: "Solved",
    severity: "Medium",
    reportedBy: "Neha Singh",
    contact: "9876543215",
  },
  {
    id: "007",
    type: "Assault",
    date: "18-Feb-2025",
    location: "Hadapsar, Pune",
    description: "Physical altercation between two individuals",
    status: "Pending",
    severity: "High",
    reportedBy: "Rajesh Khanna",
    contact: "9876543216",
  },
  {
    id: "008",
    type: "Missing Person",
    date: "15-Feb-2025",
    location: "Viman Nagar, Pune",
    description: "16-year-old son missing since yesterday evening",
    status: "Resolved",
    severity: "High",
    reportedBy: "Meera Joshi",
    contact: "9876543217",
  },
  {
    id: "009",
    type: "Domestic Violence",
    date: "12-Feb-2025",
    location: "Baner, Pune",
    description: "Neighbor reported sounds of altercation and cries for help",
    status: "Pending",
    severity: "High",
    reportedBy: "Anonymous",
    contact: "9876543218",
  },
  {
    id: "010",
    type: "Cybercrime",
    date: "10-Feb-2025",
    location: "Online",
    description: "Social media account hacked and being used for fraud",
    status: "Pending",
    severity: "Medium",
    reportedBy: "Amit Shah",
    contact: "9876543219",

  },
  {
    id: "011",
    type: "Assault",
    date: "02-march-2025",
    location: "Online",
    description: "Assualt by my friend ",
    status: "Pending",
    severity: "Medium",
    reportedBy: "Austin ",
    contact: "8169562004"

  }

]

export default function PoliceReports() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Get unique incident types
  const incidentTypes = Array.from(new Set(reports.map((report) => report.type)))

  // Filter reports based on search term, status filter, and type filter
  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reportedBy.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesType = typeFilter === "all" || report.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <PoliceLayout>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">User Reports</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Reports</CardTitle>
            <CardDescription>Search and filter citizen reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by ID, type, location, or reporter..."
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
              <div className="w-full md:w-[200px]">
                <Select defaultValue="all" onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {incidentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-12 gap-2 p-4 font-medium text-sm bg-muted">
            <div className="col-span-1">ID</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Location</div>
            <div className="col-span-2">Reported By</div>
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
                  <div className="col-span-1">{report.date}</div>
                  <div className="col-span-2">{report.type}</div>
                  <div className="col-span-2 truncate" title={report.location}>
                    {report.location}
                  </div>
                  <div className="col-span-2">{report.reportedBy}</div>
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
                      <Link href={`/police/reports/${report.id}`}>
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
    </PoliceLayout>
  )
}

