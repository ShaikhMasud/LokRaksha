"use client"

import { AdminLayout } from "@/components/layouts/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'
import CrimeHotspotMap from '@/components/CrimeHotspotMap'

// Sample data (replace with actual data from your database)
const crimeDistributionData = [
  { name: 'Theft', value: 400, color: '#8884d8' },
  { name: 'Assault', value: 300, color: '#82ca9d' },
  { name: 'Fraud', value: 200, color: '#ffc658' },
  { name: 'Vandalism', value: 100, color: '#ff8042' },
]

const monthlyTrendsData = [
  { name: 'Jan', crimes: 400, color: '#8884d8' },
  { name: 'Feb', crimes: 300, color: '#82ca9d' },
  { name: 'Mar', crimes: 200, color: '#ffc658' },
  { name: 'Apr', crimes: 278, color: '#ff8042' },
  { name: 'May', crimes: 189, color: '#0088FE' },
  { name: 'Jun', crimes: 239, color: '#00C49F' },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Crime Distribution</CardTitle>
              <CardDescription>Breakdown of crime types</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart width={400} height={300}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={crimeDistributionData}
                  cx={200}
                  cy={150}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {crimeDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Trends</CardTitle>
              <CardDescription>Crime reports over time</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart width={400} height={300} data={monthlyTrendsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="crimes">
                  {monthlyTrendsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Crime Hotspots</CardTitle>
            <CardDescription>Real-time map of crime hotspots</CardDescription>
          </CardHeader>
          <CardContent>
            <CrimeHotspotMap />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}