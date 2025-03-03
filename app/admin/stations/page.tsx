import { AdminLayout } from "@/components/layouts/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Filter, PlusCircle } from "lucide-react"
import Link from "next/link"

// Sample police stations data
const policeStations = [
  {
    id: "S001",
    name: "Pune Central",
    district: "Pune",
    inCharge: "Inspector Patil",
    officers: 45,
    contact: "020-12345678",
  },
  {
    id: "S002",
    name: "Mumbai Central",
    district: "Mumbai City",
    inCharge: "DCP Sharma",
    officers: 80,
    contact: "022-12345678",
  },
  {
    id: "S003",
    name: "Nagpur Sadar",
    district: "Nagpur",
    inCharge: "Inspector Deshmukh",
    officers: 35,
    contact: "0712-12345678",
  },
  {
    id: "S004",
    name: "Thane Central",
    district: "Thane",
    inCharge: "ACP Joshi",
    officers: 50,
    contact: "022-87654321",
  },
  {
    id: "S005",
    name: "Nashik City",
    district: "Nashik",
    inCharge: "Inspector Kulkarni",
    officers: 40,
    contact: "0253-12345678",
  },
]

export default function StationManagement() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Station Management</h1>
          <Button asChild>
            <Link href="/admin/add-station">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Police Station
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Stations</CardTitle>
            <CardDescription>Search and filter police stations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by name, ID, or in-charge..." className="pl-8" />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by district" />
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

        <Card>
          <CardHeader>
            <CardTitle>Police Stations</CardTitle>
            <CardDescription>List of all police stations in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>In-Charge</TableHead>
                  <TableHead>Officers</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {policeStations.map((station) => (
                  <TableRow key={station.id}>
                    <TableCell>{station.id}</TableCell>
                    <TableCell>{station.name}</TableCell>
                    <TableCell>{station.district}</TableCell>
                    <TableCell>{station.inCharge}</TableCell>
                    <TableCell>{station.officers}</TableCell>
                    <TableCell>{station.contact}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/stations/${station.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Link>
                      </Button>
                    </TableCell>
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

