import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Users, UserCog } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Maharashtra Crime Reporting System</h1>
          </div>
          <div>
            <Button asChild variant="outline" className="mr-2">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Report Crimes. Track Progress. Stay Safe.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A secure platform for Maharashtra citizens to report incidents, track case progress, and help law
            enforcement maintain public safety.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-2" />
              <CardTitle>For Citizens</CardTitle>
              <CardDescription>Report incidents and track your cases</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Report crimes and incidents</li>
                <li>Track status of your reports</li>
                <li>Receive updates on your cases</li>
                <li>Manage your profile</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/signup?role=citizen">Register as Citizen</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-2" />
              <CardTitle>For Police</CardTitle>
              <CardDescription>Manage reports and track cases</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>View and manage citizen reports</li>
                <li>Update case status</li>
                <li>Track crime statistics</li>
                <li>Monitor your district</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login?role=police">Login as Police</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <UserCog className="h-12 w-12 text-primary mb-2" />
              <CardTitle>For Administrators</CardTitle>
              <CardDescription>Oversee the entire system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Manage police accounts</li>
                <li>Add and manage police stations</li>
                <li>View comprehensive crime data</li>
                <li>Generate reports and analytics</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login?role=admin">Login as Admin</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="bg-muted mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Maharashtra Crime Reporting System</h3>
              <p className="text-muted-foreground">
                A secure platform for citizens to report incidents and help law enforcement maintain public safety.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Emergency Contact</h3>
              <p className="text-muted-foreground">Police Emergency: 100</p>
              <p className="text-muted-foreground">Women Helpline: 1091</p>
              <p className="text-muted-foreground">Child Helpline: 1098</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Maharashtra Crime Reporting System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

