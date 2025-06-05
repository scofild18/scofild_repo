import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CertificationsSection() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      logo: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      logo: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety",
      logo: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "API Q1",
      description: "American Petroleum Institute Quality",
      logo: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, safety, and environmental responsibility is validated by industry-leading
            certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <Image src={cert.logo || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            Our certifications demonstrate our adherence to international standards and our commitment to continuous
            improvement in all aspects of our operations.
          </p>
        </div>
      </div>
    </section>
  )
}
