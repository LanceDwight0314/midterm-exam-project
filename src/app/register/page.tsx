"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, ArrowLeft, GraduationCap, IdentificationCard } from "lucide-react"
import { addVisitor } from "@/app/lib/db"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

const COLLEGES = [
  "College of Computing",
  "College of Nursing",
  "College of Engineering",
  "College of Arts and Sciences",
  "College of Business Administration",
  "College of Education",
  "Faculty of Arts",
  "Graduate School",
  "Business Office/Staff"
]

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    college: ""
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.id || !formData.name || !formData.college) {
      toast({
        variant: "destructive",
        title: "Missing Fields",
        description: "Please fill out all fields to register."
      })
      return
    }

    setLoading(true)
    try {
      addVisitor({
        id: formData.id,
        name: formData.name,
        college: formData.college,
        isBlocked: false
      })
      
      toast({
        title: "Registration Successful",
        description: "You can now check in using your ID at the terminal.",
      })
      
      router.push("/")
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message || "An error occurred during registration."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-3xl" />
      
      <div className="mb-8 flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl">
          <UserPlus className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-headline font-bold text-primary mt-4">Visitor Registration</h1>
        <p className="text-muted-foreground">Register your institutional ID for library access</p>
      </div>

      <Card className="w-full max-w-lg border-none shadow-2xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Create Account</CardTitle>
          <CardDescription>Enter your official credentials as provided by the university</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id">School ID or Institutional Email</Label>
              <div className="relative">
                <Input 
                  id="id" 
                  placeholder="e.g. 2023-0001 or name@neu.edu.ph"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="pl-10"
                />
                <IdentificationCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Juan Dela Cruz"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="college">College / Department</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, college: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your college" />
                </SelectTrigger>
                <SelectContent>
                  {COLLEGES.map((college) => (
                    <SelectItem key={college} value={college}>
                      {college}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 mt-6" disabled={loading}>
              {loading ? "Registering..." : "Complete Registration"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Terminal
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
