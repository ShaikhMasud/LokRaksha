import { AdminLayout } from "@/components/layouts/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Filter, PlusCircle } from "lucide-react"
import Link from "next/link"

// Sample police officers data
const policeOfficers = [
  {
    id: "P001",
    name: "Inspector Patil",
    rank: "Inspector",
    station: "Pune Central",
    district: "Pune",
    contact: "9876543210",
  },
  {
    id: "P002",
    name: "Sub-Inspector Sharma",
    rank: "Sub-Inspector",
    station: "Mumbai Central",
    district: "Mumbai City",
    contact: "9876543211",
  },
  {
    id: "P003",
    name: "Constable Deshmukh",
    rank: "Constable",
    station: "Nagpur Sadar",
    district: "Nagpur",
    contact: "9876543212",
  },
  {
    id: "P004",
    name: "ASI Joshi",
    rank: "Assistant Sub-Inspector",
    station: "Thane Central",
    district: "Thane",
    contact: "9876543213",
  },
  {
    id: "P005",
    name: "DCP Kulkarni",
    rank: "Deputy Commissioner",
    station: "Nashik HQ",
    district: "Nashik",
    contact: "9876543214",
  },
]

export default function PoliceManagement() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Police Management</h1>
          <Button asChild>
            <Link href="/admin/add-police">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Police Officer
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Officers</CardTitle>
            <CardDescription>Search and filter police officers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by name, ID, or station..." className="pl-8" />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by rank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranks</SelectItem>
                    <SelectItem value="constable">Constable</SelectItem>
                    <SelectItem value="sub-inspector">Sub-Inspector</SelectItem>
                    <SelectItem value="inspector">Inspector</SelectItem>
                    <SelectItem value="dcp">Deputy Commissioner</SelectItem>
                  </SelectContent>
                </Select>
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
            <CardTitle>Police Officers</CardTitle>
            <CardDescription>List of all police officers in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Rank</TableHead>
                  <TableHead>Station</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {policeOfficers.map((officer) => (
                  <TableRow key={officer.id}>
                    <TableCell>{officer.id}</TableCell>
                    <TableCell>{officer.name}</TableCell>
                    <TableCell>{officer.rank}</TableCell>
                    <TableCell>{officer.station}</TableCell>
                    <TableCell>{officer.district}</TableCell>
                    <TableCell>{officer.contact}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/police/${officer.id}`}>
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

