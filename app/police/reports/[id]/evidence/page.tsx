"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PoliceLayout } from "@/components/layouts/police-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Upload } from "lucide-react"
import Image from "next/image"

export default function EvidencePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [evidenceDescription, setEvidenceDescription] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would upload the file and save the evidence description
    toast({
      title: "Evidence Submitted",
      description: "The evidence has been successfully added to the case.",
    })

    // Redirect back to the report details page
    router.push(`/police/reports/${params.id}`)
  }

  return (
    <PoliceLayout>
      <div className="container mx-auto p-4 md:p-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Report
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Add Evidence</CardTitle>
            <CardDescription>Upload photos and add description for case evidence</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="photo">Upload Photo</Label>
                <div className="flex items-center gap-4">
                  <Button type="button" variant="outline" onClick={() => document.getElementById("photo")?.click()}>
                    <Upload className="mr-2 h-4 w-4" />
                    Select Photo
                  </Button>
                  <Input id="photo" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  {selectedFile && <span className="text-sm text-muted-foreground">{selectedFile.name}</span>}
                </div>
              </div>

              {previewUrl && (
                <div className="mt-4">
                  <Image
                    src={previewUrl || "/placeholder.svg"}
                    alt="Evidence preview"
                    width={300}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Evidence Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the evidence in detail..."
                  value={evidenceDescription}
                  onChange={(e) => setEvidenceDescription(e.target.value)}
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Submit Evidence</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </PoliceLayout>
  )
}

