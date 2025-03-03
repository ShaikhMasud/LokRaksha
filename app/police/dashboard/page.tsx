import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, MapPin, XCircle } from "lucide-react"
import Link from "next/link"
import { PoliceLayout } from "@/components/layouts/police-layout"

export default function PoliceDashboard() {
  return (
    <PoliceLayout>
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Police Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, Inspector Patil! Here's an overview of reports in your district.
          </p>
        </div>

        <Separator />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Solved Cases</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">20</div>
              <p className="text-xs text-muted-foreground">40% of total cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unsolved Cases</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">50% of total cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fake Reports</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">10% of total cases</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Latest reports submitted in your district</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "001",
                    type: "Theft",
                    date: "01-Mar-2025",
                    location: "Shivaji Nagar, Pune",
                    status: "Pending",
                    severity: "Medium",
                  },
                  {
                    id: "002",
                    type: "Accident",
                    date: "28-Feb-2025",
                    location: "FC Road, Pune",
                    status: "Resolved",
                    severity: "High",
                  },
                  {
                    id: "003",
                    type: "Harassment",
                    date: "25-Feb-2025",
                    location: "Koregaon Park, Pune",
                    status: "Resolved",
                    severity: "Low",
                  },
                  {
                    id: "004",
                    type: "Vandalism",
                    date: "24-Feb-2025",
                    location: "MG Road, Pune",
                    status: "Pending",
                    severity: "Medium",
                  },
                  {
                    id: "005",
                    type: "Fraud",
                    date: "22-Feb-2025",
                    location: "Aundh, Pune",
                    status: "Pending",
                    severity: "High",
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
                          report.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {report.status}
                      </div>
                      <div
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          report.severity === "High"
                            ? "bg-red-100 text-red-800"
                            : report.severity === "Medium"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {report.severity}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/police/reports/${report.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/police/reports">View All Reports</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Crime Hotspots</CardTitle>
              <CardDescription>Areas with high incident reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/40 p-4 h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Interactive map would be displayed here</p>
                  <p className="text-xs text-muted-foreground mt-1">Showing crime hotspots in Pune district</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Shivaji Nagar</span>
                  <span className="font-medium">12 reports</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>FC Road</span>
                  <span className="font-medium">8 reports</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Koregaon Park</span>
                  <span className="font-medium">6 reports</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
            <TabsTrigger value="type">By Crime Type</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Crime Trends</CardTitle>
                <CardDescription>Crime reports over the last 3 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-muted/40 p-4 h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Bar chart would be displayed here</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Jan: 42 reports, Feb: 50 reports, Mar: 15 reports (so far)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="type" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Crime by Type</CardTitle>
                <CardDescription>Distribution of crime types in your district</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-muted/40 p-4 h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Pie chart would be displayed here</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Theft: 40%, Assault: 20%, Accident: 15%, Others: 25%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PoliceLayout>
  )
}

