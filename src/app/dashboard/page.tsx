'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for demonstration
const revenueData = [
  { month: 'Jan', revenue: 4000, paid: 3800, delayed: 200 },
  { month: 'Feb', revenue: 4500, paid: 4000, delayed: 500 },
  { month: 'Mar', revenue: 5000, paid: 4200, delayed: 800 },
];

const propertyStats = {
  totalProperties: 5,
  totalTenants: 12,
  occupancyRate: "80%",
  totalRevenue: "$13,500"
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{propertyStats.totalProperties}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Tenants</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{propertyStats.totalTenants}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Occupancy Rate</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{propertyStats.occupancyRate}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{propertyStats.totalRevenue}</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Revenue Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#4F46E5" name="Total Revenue" />
              <Bar dataKey="paid" fill="#10B981" name="Paid" />
              <Bar dataKey="delayed" fill="#EF4444" name="Delayed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 