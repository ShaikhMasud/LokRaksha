"use client"

import { useState } from "react"
import { PoliceLayout } from "@/components/layouts/police-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, PieChart, MapPin } from "lucide-react"

export default function CrimeData() {
  const [timeRange, setTimeRange] = useState("month")
  const [district, setDistrict] = useState("pune")

  return (
    <PoliceLayout>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Crime Data Analysis</h1>
            <p className="text-muted-foreground">Analyze crime patterns and trends in your district</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue={district} onValueChange={setDistrict}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="nagpur">Nagpur</SelectItem>
                <SelectItem value="thane">Thane</SelectItem>
                <SelectItem value="nashik">Nashik</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+12% from previous period</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Solved Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">64</div>
              <p className="text-xs text-muted-foreground">50.4% of total cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58</div>
              <p className="text-xs text-muted-foreground">45.7% of total cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Fake Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">3.9% of total cases</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList>
            <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
            <TabsTrigger value="distribution">Crime Distribution</TabsTrigger>
            <TabsTrigger value="locations">Crime Locations</TabsTrigger>
          </TabsList>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Crime Trends</CardTitle>
                <CardDescription>Number of reported incidents over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <div className="w-full max-w-4xl">
                    {/* Bar Chart Visualization */}
                    <div className="relative">
                      {/* This would be a real chart in a production app */}
                      <div className="flex items-end justify-between h-64 gap-2 mb-4">
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-32"></div>
                          <span className="mt-2 text-xs">Jan</span>
                          <span className="absolute -top-6 text-xs font-medium">42</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-36"></div>
                          <span className="mt-2 text-xs">Feb</span>
                          <span className="absolute -top-6 text-xs font-medium">50</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-24"></div>
                          <span className="mt-2 text-xs">Mar</span>
                          <span className="absolute -top-6 text-xs font-medium">35</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-40"></div>
                          <span className="mt-2 text-xs">Apr</span>
                          <span className="absolute -top-6 text-xs font-medium">55</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-48"></div>
                          <span className="mt-2 text-xs">May</span>
                          <span className="absolute -top-6 text-xs font-medium">65</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-44"></div>
                          <span className="mt-2 text-xs">Jun</span>
                          <span className="absolute -top-6 text-xs font-medium">60</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-52"></div>
                          <span className="mt-2 text-xs">Jul</span>
                          <span className="absolute -top-6 text-xs font-medium">70</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-56"></div>
                          <span className="mt-2 text-xs">Aug</span>
                          <span className="absolute -top-6 text-xs font-medium">75</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-48"></div>
                          <span className="mt-2 text-xs">Sep</span>
                          <span className="absolute -top-6 text-xs font-medium">65</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-40"></div>
                          <span className="mt-2 text-xs">Oct</span>
                          <span className="absolute -top-6 text-xs font-medium">55</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-36"></div>
                          <span className="mt-2 text-xs">Nov</span>
                          <span className="absolute -top-6 text-xs font-medium">50</span>
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 bg-primary rounded-t h-28"></div>
                          <span className="mt-2 text-xs">Dec</span>
                          <span className="absolute -top-6 text-xs font-medium">40</span>
                        </div>
                      </div>
                      <div className="border-t border-border pt-4 flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          <BarChart className="h-4 w-4 inline-block mr-1" />
                          Monthly crime reports for{" "}
                          {district === "pune"
                            ? "Pune"
                            : district === "mumbai"
                              ? "Mumbai"
                              : district === "nagpur"
                                ? "Nagpur"
                                : district === "thane"
                                  ? "Thane"
                                  : "Nashik"}{" "}
                          district
                        </div>
                        <div className="text-sm font-medium">Total: 662 reports</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution">
            <Card>
              <CardHeader>
                <CardTitle>Crime Type Distribution</CardTitle>
                <CardDescription>Breakdown of incidents by crime type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <div className="w-full max-w-4xl">
                    {/* Pie Chart Visualization */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="relative w-64 h-64">
                        {/* This would be a real chart in a production app */}
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                          <div className="absolute inset-0">
                            <div
                              className="absolute inset-0 bg-blue-500"
                              style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
                            ></div>
                            <div
                              className="absolute inset-0 bg-red-500"
                              style={{ clipPath: "polygon(50% 50%, 100% 100%, 0% 100%)" }}
                            ></div>
                            <div
                              className="absolute inset-0 bg-yellow-500"
                              style={{ clipPath: "polygon(50% 50%, 0% 100%, 0% 0%, 50% 0%)" }}
                            ></div>
                          </div>
                          <div className="z-10 bg-background w-32 h-32 rounded-full flex items-center justify-center">
                            <PieChart className="h-6 w-6 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded-sm mr-2"></div>
                            <span className="flex-1">Theft</span>
                            <span className="font-medium">40%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
                            <span className="flex-1">Assault</span>
                            <span className="font-medium">25%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded-sm mr-2"></div>
                            <span className="flex-1">Fraud</span>
                            <span className="font-medium">20%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
                            <span className="flex-1">Vandalism</span>
                            <span className="font-medium">10%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-purple-500 rounded-sm mr-2"></div>
                            <span className="flex-1">Others</span>
                            <span className="font-medium">5%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="locations">
            <Card>
              <CardHeader>
                <CardTitle>Crime Hotspots</CardTitle>
                <CardDescription>Geographic distribution of reported incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <div className="w-full max-w-4xl">
                    {/* Map Visualization */}
                    <div className="rounded-lg border bg-muted/40 p-4 h-[300px] flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Interactive map would be displayed here</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Showing crime hotspots in{" "}
                          {district === "pune"
                            ? "Pune"
                            : district === "mumbai"
                              ? "Mumbai"
                              : district === "nagpur"
                                ? "Nagpur"
                                : district === "thane"
                                  ? "Thane"
                                  : "Nashik"}{" "}
                          district
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-sm font-medium">Top Hotspots</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {district === "pune" ? (
                          <>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Shivaji Nagar</span>
                              <span className="font-medium">32 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>FC Road</span>
                              <span className="font-medium">28 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Koregaon Park</span>
                              <span className="font-medium">24 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Aundh</span>
                              <span className="font-medium">18 reports</span>
                            </div>
                          </>
                        ) : district === "mumbai" ? (
                          <>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Colaba</span>
                              <span className="font-medium">45 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Bandra</span>
                              <span className="font-medium">38 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Andheri</span>
                              <span className="font-medium">32 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Dadar</span>
                              <span className="font-medium">28 reports</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Area 1</span>
                              <span className="font-medium">30 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Area 2</span>
                              <span className="font-medium">25 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Area 3</span>
                              <span className="font-medium">20 reports</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border rounded-md p-3">
                              <span>Area 4</span>
                              <span className="font-medium">15 reports</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
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

