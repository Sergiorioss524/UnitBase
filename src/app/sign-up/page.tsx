"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  const searchParams = useSearchParams()
  const role = searchParams.get("role")

  useEffect(() => {
    if (!role || !["host", "tenant"].includes(role)) {
      window.location.href = "/"
    }
  }, [role])

  if (!role || !["host", "tenant"].includes(role)) {
    return null
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Sign up as a {role === "host" ? "Host" : "Tenant"}
          </h1>
          <p className="mt-2 text-gray-600">
            {role === "host"
              ? "Create your account to start managing properties"
              : "Create your account to start renting properties"}
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-none",
            },
          }}
          forceRedirectUrl={`/api/auth/${role}-callback`}
          routing="hash"
        />
      </div>
    </div>
  )
}
