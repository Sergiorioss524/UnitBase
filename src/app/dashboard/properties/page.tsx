import { Building2, Users, DollarSign, Home } from "lucide-react";

// Dummy data for demonstration
const properties = [
  {
    id: 1,
    name: "Sunset Apartments",
    address: "123 Sunset Blvd, Los Angeles, CA",
    units: 8,
    occupiedUnits: 6,
    monthlyRevenue: "$12,000",
    type: "Apartment Complex"
  },
  {
    id: 2,
    name: "Ocean View Condos",
    address: "456 Beach Road, Miami, FL",
    units: 12,
    occupiedUnits: 10,
    monthlyRevenue: "$24,000",
    type: "Condominium"
  },
  {
    id: 3,
    name: "Mountain Lodge",
    address: "789 Pine Street, Denver, CO",
    units: 6,
    occupiedUnits: 4,
    monthlyRevenue: "$8,000",
    type: "Townhouse"
  }
];

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Properties</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Property
        </button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{property.address}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {property.type}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Units</p>
                    <p className="text-lg font-semibold">{property.units}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Occupied</p>
                    <p className="text-lg font-semibold">{property.occupiedUnits}/{property.units}</p>
                  </div>
                </div>
                <div className="flex items-center col-span-2">
                  <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                    <p className="text-lg font-semibold text-green-600">{property.monthlyRevenue}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-gray-50 text-gray-600 py-2 rounded-lg hover:bg-gray-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 