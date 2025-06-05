import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function LocationsSection() {
  const locations = [
    {
      city: "Houston, TX",
      address: "123 Energy Boulevard, Houston, TX 77002",
      phone: "+1 (555) 123-4567",
      email: "houston@petrox.com",
      type: "Headquarters",
    },
    {
      city: "Dallas, TX",
      address: "456 Oil Avenue, Dallas, TX 75201",
      phone: "+1 (555) 234-5678",
      email: "dallas@petrox.com",
      type: "Regional Office",
    },
    {
      city: "Calgary, AB",
      address: "789 Petroleum Road, Calgary, AB T2P 1J9",
      phone: "+1 (555) 345-6789",
      email: "calgary@petrox.com",
      type: "Regional Office",
    },
    {
      city: "Dubai, UAE",
      address: "1010 Energy Tower, Sheikh Zayed Road, Dubai",
      phone: "+971 4 123 4567",
      email: "dubai@petrox.com",
      type: "International Office",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices across North America and the Middle East, we're positioned to serve clients globally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium text-yellow-600">{location.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{location.city}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <p>{location.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
