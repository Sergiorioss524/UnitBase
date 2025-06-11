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
import { User, Home, UserPlus } from "lucide-react"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const handleHostLogin = () => {
    // Handle host login logic here
    console.log("Host login clicked")
    setIsOpen(false)
  }

  const handleTenantLogin = () => {
    // Handle tenant login logic here
    console.log("Tenant login clicked")
    setIsOpen(false)
  }

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Sign up clicked")
    setIsOpen(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">Welcome to UnitBase boi</h1>
        <p className="text-xl text-gray-600 leading-relaxed">This is a simple landing page for UnitBase.</p>

        <div className="pt-8">
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
                <DialogTitle className="text-2xl font-bold text-center">Welcome to UnitBase</DialogTitle>
                <DialogDescription className="text-center text-gray-600">
                  Choose how you'd like to continue
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 pt-4">
                <Button
                  onClick={handleHostLogin}
                  variant="outline"
                  size="lg"
                  className="w-full h-14 text-left justify-start space-x-3 border-2 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                >
                  <Home className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Login as Host</div>
                    <div className="text-sm text-gray-500">Manage your properties</div>
                  </div>
                </Button>

                <Button
                  onClick={handleTenantLogin}
                  variant="outline"
                  size="lg"
                  className="w-full h-14 text-left justify-start space-x-3 border-2 hover:border-green-300 hover:bg-green-50 transition-colors"
                >
                  <User className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Login as Tenant</div>
                    <div className="text-sm text-gray-500">Access your rental</div>
                  </div>
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>

                <Button
                  onClick={handleSignUp}
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Sign Up
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  )
}
