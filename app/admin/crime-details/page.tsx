import { AdminLayout } from "@/components/layouts/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, PieChart } from "lucide-react"

// Sample crime data
const crimeData = [
  { district: "Pune", total: 500, solved: 300, unsolved: 180, fake: 20 },
  { district: "Mumbai City", total: 800, solved: 450, unsolved: 320, fake: 30 },
  { district: "Nagpur", total: 300, solved: 180, unsolved: 110, fake: 10 },
  { district: "Thane", total: 400, solved: 240, unsolved: 150, fake: 10 },
  { district: "Nashik", total: 250, solved: 150, unsolved: 90, fake: 10 },
]

export default function CrimeDetails() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Crime Details</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Crime Data</CardTitle>
            <CardDescription>Select time range and district</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[200px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Last Week</SelectItem>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-[200px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="mumbai">Mumbai City</SelectItem>
                    <SelectItem value="nagpur">Nagpur</SelectItem>
                    <SelectItem value="thane">Thane</SelectItem>
                    <SelectItem value="nashik">Nashik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Crime Distribution</CardTitle>
              <CardDescription>Breakdown of crime types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <PieChart className="h-64 w-64 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Trends</CardTitle>
              <CardDescription>Crime reports over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <BarChart className="h-64 w-64 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Crime Statistics by District</CardTitle>
            <CardDescription>Overview of crime data across districts</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>District</TableHead>
                  <TableHead>Total Reports</TableHead>
                  <TableHead>Solved Cases</TableHead>
                  <TableHead>Unsolved Cases</TableHead>
                  <TableHead>Fake Reports</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {crimeData.map((district) => (
                  <TableRow key={district.district}>
                    <TableCell>{district.district}</TableCell>
                    <TableCell>{district.total}</TableCell>
                    <TableCell>{district.solved}</TableCell>
                    <TableCell>{district.unsolved}</TableCell>
                    <TableCell>{district.fake}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

