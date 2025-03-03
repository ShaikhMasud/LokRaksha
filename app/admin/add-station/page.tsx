"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

// Maharashtra districts
const districts = [
  "Mumbai City",
  "Mumbai Suburban",
  "Thane",
  "Palghar",
  "Raigad",
  "Pune",
  "Satara",
  "Solapur",
  "Kolhapur",
  "Sangli",
  "Nashik",
  "Ahmednagar",
  "Dhule",
  "Jalgaon",
  "Nandurbar",
  "Aurangabad",
  "Jalna",
  "Beed",
  "Osmanabad",
  "Nanded",
  "Latur",
  "Parbhani",
  "Hingoli",
  "Nagpur",
  "Wardha",
  "Bhandara",
  "Gondia",
  "Chandrapur",
  "Gadchiroli",
  "Amravati",
  "Akola",
  "Washim",
  "Buldhana",
  "Yavatmal",
]



export default function AddStation() {
  const router = useRouter()
  const { toast } = useToast()
  
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    address: "",
    inCharge: "",
    contact: "",
    email: "",
    jurisdiction: "",
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.district || !formData.address ){

    }
  }
}

