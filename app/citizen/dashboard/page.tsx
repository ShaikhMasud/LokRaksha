import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Clock, FileText } from "lucide-react"
import Link from "next/link"
import { CitizenLayout } from "@/components/layouts/citizen-layout"

export default function CitizenDashboard() {
  return (
    <CitizenLayout>
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">Welcome back, Austin! Here's an overview of your reports.</p>
          </div>
          <Button asChild>
            <Link href="/citizen/report">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Report Incident
            </Link>
          </Button>
        </div>

        <Separator />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">All reports submitted</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Reports awaiting action</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Reports marked as resolved</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Report</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 days ago</div>
              <p className="text-xs text-muted-foreground">Theft in Shivaji Nagar</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Reports</TabsTrigger>
            <TabsTrigger value="updates">Recent Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your most recently submitted reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {[
                    {
                      id: "001",
                      type: "Theft",
                      date: "01-Mar-2025",
                      location: "Shivaji Nagar, Pune",
                      status: "Pending",
                    },
                    {
                      id: "002",
                      type: "Accident",
                      date: "28-Feb-2025",
                      location: "FC Road, Pune",
                      status: "Resolved",
                    },
                    {
                      id: "003",
                      type: "Harassment",
                      date: "25-Feb-2025",
                      location: "Koregaon Park, Pune",
                      status: "Resolved",
                    },
                  ].map((report) => (
                    <div key={report.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {report.type} - ID: {report.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {report.location} on {report.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            report.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {report.status}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/citizen/reports/${report.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/citizen/reports">View All Reports</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="updates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest updates on your reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {[
                    {
                      id: "002",
                      type: "Accident",
                      date: "29-Feb-2025",
                      update: "Inspector Patil has been assigned to your case",
                    },
                    {
                      id: "002",
                      type: "Accident",
                      date: "01-Mar-2025",
                      update: "Your case has been marked as resolved",
                    },
                    {
                      id: "003",
                      type: "Harassment",
                      date: "26-Feb-2025",
                      update: "Your case has been marked as resolved",
                    },
                  ].map((update, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {update.type} - ID: {update.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {update.update} on {update.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/citizen/reports/${update.id}`}>View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CitizenLayout>
  )
}

