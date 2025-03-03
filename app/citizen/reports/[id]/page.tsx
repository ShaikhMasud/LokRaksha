"use client"
import { useRouter } from "next/navigation"
import { CitizenLayout } from "@/components/layouts/citizen-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, MapPin, MessageSquare, User } from "lucide-react"
import Link from "next/link"

// Sample report data - in a real app, this would be fetched from an API
const reports = {
  "001": {
    id: "001",
    type: "Theft",
    date: "01-Mar-2025",
    time: "3:00 PM",
    location: "Shivaji Nagar, Pune",
    description:
      "Bag stolen near Shivaji Market. It was a black backpack containing a laptop, wallet, and some documents. The incident happened while I was shopping at the market.",
    status: "Pending",
    severity: "Medium",
    assignedTo: "Inspector Patil",
    updates: [
      {
        date: "01-Mar-2025",
        time: "4:30 PM",
        message: "Report received and registered in the system.",
        by: "System",
      },
      {
        date: "02-Mar-2025",
        time: "10:15 AM",
        message: "Case assigned to Inspector Patil for investigation.",
        by: "Station In-charge",
      },
      {
        date: "02-Mar-2025",
        time: "2:45 PM",
        message: "Initial investigation started. CCTV footage from the market area being reviewed.",
        by: "Inspector Patil",
      },
    ],
  },
  "002": {
    id: "002",
    type: "Accident",
    date: "28-Feb-2025",
    time: "5:30 PM",
    location: "FC Road, Pune",
    description:
      "Two-wheeler accident near FC College gate. A car hit my scooter from behind while I was waiting at the traffic signal. Minor injuries sustained.",
    status: "Resolved",
    severity: "High",
    assignedTo: "Inspector Sharma",
    updates: [
      {
        date: "28-Feb-2025",
        time: "6:00 PM",
        message: "Report received and registered in the system.",
        by: "System",
      },
      {
        date: "28-Feb-2025",
        time: "7:30 PM",
        message: "Case assigned to Inspector Sharma for investigation.",
        by: "Station In-charge",
      },
      {
        date: "29-Feb-2025",
        time: "11:00 AM",
        message: "Visited the accident site and collected evidence. Statements recorded from witnesses.",
        by: "Inspector Sharma",
      },
      {
        date: "01-Mar-2025",
        time: "3:15 PM",
        message: "Driver of the car identified and called for questioning.",
        by: "Inspector Sharma",
      },
      {
        date: "01-Mar-2025",
        time: "5:45 PM",
        message: "Case resolved with mutual agreement between both parties. Insurance claim process initiated.",
        by: "Inspector Sharma",
      },
    ],
  },
  "003": {
    id: "003",
    type: "Harassment",
    date: "25-Feb-2025",
    time: "9:15 PM",
    location: "Koregaon Park, Pune",
    description:
      "Verbal harassment by a group of individuals outside a restaurant. They were making inappropriate comments and blocking the way.",
    status: "Resolved",
    severity: "Low",
    assignedTo: "Inspector Deshmukh",
    updates: [
      {
        date: "25-Feb-2025",
        time: "9:45 PM",
        message: "Report received and registered in the system.",
        by: "System",
      },
      {
        date: "26-Feb-2025",
        time: "10:00 AM",
        message: "Case assigned to Inspector Deshmukh for investigation.",
        by: "Station In-charge",
      },
      {
        date: "26-Feb-2025",
        time: "2:30 PM",
        message: "Visited the location and spoke with restaurant staff. CCTV footage reviewed.",
        by: "Inspector Deshmukh",
      },
      {
        date: "26-Feb-2025",
        time: "6:00 PM",
        message: "Individuals identified and called to the station for questioning.",
        by: "Inspector Deshmukh",
      },
      {
        date: "26-Feb-2025",
        time: "8:30 PM",
        message: "Case resolved. Warning issued to the individuals and they have provided a written apology.",
        by: "Inspector Deshmukh",
      },
    ],
  },
  "004": {
    id: "004",
    type: "Vandalism",
    date: "24-Feb-2025",
    time: "11:30 PM",
    location: "MG Road, Pune",
    description:
      "Shop window broken during late hours. Heard a loud noise and saw that my shop's front glass was shattered. No items were stolen from inside.",
    status: "Pending",
    severity: "Medium",
    assignedTo: "Inspector Patil",
    updates: [
      {
        date: "25-Feb-2025",
        time: "8:30 AM",
        message: "Report received and registered in the system.",
        by: "System",
      },
      {
        date: "25-Feb-2025",
        time: "11:00 AM",
        message: "Case assigned to Inspector Patil for investigation.",
        by: "Station In-charge",
      },
      {
        date: "25-Feb-2025",
        time: "3:00 PM",
        message: "Visited the shop and collected evidence. CCTV footage from nearby establishments requested.",
        by: "Inspector Patil",
      },
      {
        date: "26-Feb-2025",
        time: "10:45 AM",
        message: "Analyzing CCTV footage from the area. Investigation ongoing.",
        by: "Inspector Patil",
      },
    ],
  },
  "005": {
    id: "005",
    type: "Fraud",
    date: "22-Feb-2025",
    time: "2:15 PM",
    location: "Aundh, Pune",
    description:
      "Online payment fraud of Rs. 5000. Received a call from someone claiming to be from my bank and asking for OTP. Later found unauthorized transaction.",
    status: "Pending",
    severity: "High",
    assignedTo: "Inspector Sharma",
    updates: [
      {
        date: "22-Feb-2025",
        time: "3:00 PM",
        message: "Report received and registered in the system.",
        by: "System",
      },
      {
        date: "22-Feb-2025",
        time: "5:30 PM",
        message: "Case assigned to Inspector Sharma for investigation.",
        by: "Station In-charge",
      },
      {
        date: "23-Feb-2025",
        time: "11:30 AM",
        message: "Initial investigation started. Bank transaction details requested.",
        by: "Inspector Sharma",
      },
      {
        date: "24-Feb-2025",
        time: "4:00 PM",
        message: "Phone number used by fraudster traced. Further investigation ongoing.",
        by: "Inspector Sharma",
      },
      {
        date: "26-Feb-2025",
        time: "2:30 PM",
        message: "Coordinating with Cyber Cell for detailed investigation.",
        by: "Inspector Sharma",
      },
    ],
  },
}

export default function ReportDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const reportId = params.id
  const report = reports[reportId as keyof typeof reports]

  // Handle case where report doesn't exist
  if (!report) {
    return (
      <CitizenLayout>
        <div className="container mx-auto p-4 md:p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Report Not Found</h1>
          <p className="mb-6">The report you are looking for does not exist or you don't have permission to view it.</p>
          <Button asChild>
            <Link href="/citizen/reports">Back to My Reports</Link>
          </Button>
        </div>
      </CitizenLayout>
    )
  }

  return (
    <CitizenLayout>
      <div className="container mx-auto p-4 md:p-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reports
          </Button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{report.type} Report</h1>
              <p className="text-muted-foreground">Report ID: {report.id}</p>
            </div>
            <Badge
              className={`text-sm px-3 py-1 ${
                report.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                  : report.status === "Resolved" || report.status === "Solved"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : report.status === "Fake"
                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                      : "bg-blue-100 text-blue-800 hover:bg-blue-100"
              }`}
            >
              {report.status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Incident Details</CardTitle>
                <CardDescription>Information about the reported incident</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Incident Type</p>
                    <p className="font-medium">{report.type}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Severity</p>
                    <p className="font-medium">{report.severity}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {report.date}
                      <Clock className="h-4 w-4 ml-2 mr-1" />
                      {report.time}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {report.location}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Description</p>
                  <p>{report.description}</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Assigned Officer</p>
                  <p className="font-medium flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {report.assignedTo}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Case Updates</CardTitle>
                <CardDescription>Latest updates on your case</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {report.updates.map((update, index) => (
                    <div key={index} className="relative pl-6 pb-4 border-l border-muted last:pb-0">
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {update.date} at {update.time} by {update.by}
                        </p>
                        <p>{update.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Additional Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Assigned Officer
                </Button>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </CitizenLayout>
  )
}

