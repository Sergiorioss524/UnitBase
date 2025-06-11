"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { User, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { SignedIn, SignedOut } from "@clerk/nextjs"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<"host" | "tenant" | null>(null)
  const router = useRouter()

  const handleRoleSelect = (role: "host" | "tenant") => {
    setSelectedRole(role)
    router.push(`/sign-up?role=${role}`)
    setIsOpen(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">Welcome to UnitBase</h1>
        <p className="text-xl text-gray-600 leading-relaxed">Manage your properties and tenants with ease.</p>

        <div className="pt-8">
          <SignedOut>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">Choose Your Role</DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    Select how you'll use UnitBase
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 pt-4">
                  <Button
                    onClick={() => handleRoleSelect("host")}
                    variant="outline"
                    size="lg"
                    className="w-full h-14 text-left justify-start space-x-3 border-2 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    <Home className="h-6 w-6 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">I'm a Host</div>
                      <div className="text-sm text-gray-500">I want to manage properties</div>
                    </div>
                  </Button>

                  <Button
                    onClick={() => handleRoleSelect("tenant")}
                    variant="outline"
                    size="lg"
                    className="w-full h-14 text-left justify-start space-x-3 border-2 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    <User className="h-6 w-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">I'm a Tenant</div>
                      <div className="text-sm text-gray-500">I want to rent a property</div>
                    </div>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </SignedOut>

          <SignedIn>
            <div className="space-y-4">
              <Button
                onClick={() => router.push("/dashboard")}
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Go to Dashboard
              </Button>
            </div>
          </SignedIn>
        </div>
      </div>
    </main>
  )
}
