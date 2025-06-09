import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Home, Building2, Users, CreditCard } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { userId } = await auth(); // ✅ Correcto

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">UnitBase</h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 hover:bg-gray-800"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/properties"
                className="flex items-center px-4 py-2 hover:bg-gray-800"
              >
                <Building2 className="mr-3 h-5 w-5" />
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/tenants"
                className="flex items-center px-4 py-2 hover:bg-gray-800"
              >
                <Users className="mr-3 h-5 w-5" />
                Tenants
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/payments"
                className="flex items-center px-4 py-2 hover:bg-gray-800"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Payments
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
} 